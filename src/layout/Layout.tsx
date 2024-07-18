import React, { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import MainTopbar from "./MainTopbar";
import MobileMenu from "./MobileMenu";
import MobileSidebar from "./MobileSidebar";
import MainContainer from "./MainContainer";

export interface LayoutProps {
    sidebar: ReactNode;
    sidebarBg?: boolean;
    mobileSidebar: ReactNode;
    main: ReactNode;
    name?: string;
    shared: SharedProps;
    fullScreen?: boolean;
}

export interface SharedProps {
    accountUrl: string
    loginUrl: string
    sidebarTitle: ReactNode;
    links: {
        name: string,
        url: string,
        activeSVG: React.ReactElement<SVGElement>,
        passiveSVG: React.ReactElement<SVGElement>
    }[]
}

const Layout = ({ name, shared, sidebar, sidebarBg = true, main, mobileSidebar, fullScreen = false }: LayoutProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex flex-col justify-between h-screen overflow-hidden relative w-max-[1920px]">
            <Sidebar
                    isSidebarOpen={isSidebarOpen}
                    toggleSidebar={toggleSidebar}
                    blackBackground={sidebarBg}
                    name={name}
                    title={shared.sidebarTitle}>
                    {sidebar}
            </Sidebar>
            <MainTopbar
                toggleSidebar={toggleSidebar}
                isSidebarOpen={isSidebarOpen}
                {...shared} />
            <div className="overflow-auto z-50 h-full">
                
                <div className="flex-1 overflow-x-hidden h-full">
                    
                    <main className="overflow-y-auto h-full z-40 lg:ml-[22%] xl:ml-[25%]">
                        {fullScreen ? main : <MainContainer>{main}</MainContainer>}
                    </main>
                </div>
            </div>
            {mobileSidebar && (
                <MobileSidebar name={name}>{mobileSidebar}</MobileSidebar>
            )}
            <div className="absolute bottom-0 left-0 w-full block lg:hidden custom-mobile-menu">
                <MobileMenu links={shared.links} />
            </div>
        </div>
    );
};

export default Layout;

export type LayoutComponentProps = { main: ReactNode, sidebar: ReactNode, mobileSidebar: ReactNode, sidebarBg?: boolean, hideTitle?: boolean }
export type LayoutComponent = React.FC<LayoutComponentProps>
export const withLayout = (shared: SharedProps, name?: string, fullSCreen?: boolean) =>
    ({ main, sidebar, mobileSidebar, sidebarBg, hideTitle }: LayoutComponentProps) => {
        return <Layout main={main} sidebar={sidebar} mobileSidebar={mobileSidebar} shared={shared} sidebarBg={sidebarBg} name={!hideTitle? name:undefined} fullScreen={fullSCreen} />;
    };
