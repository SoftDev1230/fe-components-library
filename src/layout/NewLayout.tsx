import React, { ReactNode, useContext, useState } from "react";
import Sidebar from "./Sidebar";
import MainTopbar from "./MainTopbar";
import MobileMenu from "./MobileMenu";
import MobileSidebar from "./MobileSidebar";
import MainContainer from "./MainContainer";
import { Link } from "react-router-dom";
import '../utils/arrayExtensions';
import { AuthContext } from "../config/AuthContext";
import { ProfileSVG } from "./SVGs";

export interface NewLayoutProps {
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

const NewLayout = ({ name, shared, sidebar, sidebarBg = true, main, mobileSidebar, fullScreen = false }: NewLayoutProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const loggedIn = useContext(AuthContext);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-svh">
            <aside className=" fixed w-full lg:h-auto h-full top-0 left-0 lg:w-[20%] xl:w-[22%] bg-[rgb(32,32,32)] lg:bg-opacity-60 lg:rounded-[20px] lg:border lg:border-[rgba(78,78,78,0.36)] lg:m-[20px] lg:relative lg:translate-y-0 transform translate-y-full transition-transform duration-300 ease-in-out z-2000" id="sidebar">



                {/* <aside
            className={`overflow-hidden sidebar-custom-height fixed inset-y-0 left-0 w-full lg:w-[20%] xl:w-[22%] lg:ml-[1%] lg:my-[20px] lg:mr-[1%] transition-transform duration-300 transform rounded-[20px] border-[0.9px]
              ${!!blackBackground ? 'custom-sidebar-style-rtk' : 'custom-sidebar-style'}
              ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:left-0
              ${isSidebarOpen ? "lg:translate-y-0" : "-translate-y-full"} lg:translate-y-0`}> */}
                <div className="custom-z h-full overflow-auto flex-col flex">
                    <div
                        className="hidden lg:flex lg:flex-row lg:justify-start lg:items-center lg:gap-x-3 xl:gap-x-4 lg:pl-3 xl:pl-7 py-9">
                        {shared.sidebarTitle}
                    </div>
                    <div className="mt-[50px] lg:mt-0 hidden lg:block px-4 xl:px-6 mb-[30px] pt-[10px] lg:pt-0 flex-grow">
                        {name &&
                            <p className="text-white text-[16px] xl:text-[18px] text-center lg:text-left font-semibold">{name}</p>}
                        {sidebar}
                    </div>

                </div>
                {/* </aside> */}




            </aside>
            <div className="flex flex-col flex-1 h-full">
                <header className="bg-[rgb(32,32,32)] lg:bg-opacity-60 lg:rounded-[20px] lg:border lg:border-[rgba(78,78,78,0.36)] lg:m-[20px] flex-grow-0">
                    {/* <MainTopbar
                toggleSidebar={toggleSidebar}
                isSidebarOpen={isSidebarOpen}
                {...shared} /> */}

                    <nav className="flex  flex-row-reverse justify-between items-center lg:px-4 xl:px-5 2xl:px-8">
                        <div className="flex justify-center items-center lg:gap-x-2 xl:gap-x-3 py-2">

                            {loggedIn === 'loading' || !loggedIn ? (
                                <>
                                    <Link
                                        to={shared.loginUrl}
                                        className="text-[12px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] text-white hover:text-light-green pr-[10px] font-normal">
                                        Log in
                                    </Link>

                                    <a  // href={URLGenerationService.signUpPageURL}
                                    >
                                        {/*                                    <Button
                                        text="Create Account"
                                        bgColor="bg-gradient-to-r from-bg-green1 to-bg-green2"
                                        fontColor="text-[#0D0D0D]"
                                        textTransform=""
                                        padding="py-[15px] xl:py-[13px] 2xl:py-[13px] px-4 xl:px-8"
                                        customFont="font-normal"
                                        fontSize="text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px]"
                                        className="rounded-[17px] lg:rounded-[20px]"/> !TODO button*/}
                                    </a>
                                </>
                            ) : (
                                <Link
                                    to={shared.accountUrl}
                                    className="border border-transparent bg-[#343434] hover:bg-transparent rounded-[11px] hover:border-green-500 px-[12px] py-[12px] xl:py-[12px] 2xl:py-[12.5px] xl:px-[16px]">
                                    {loggedIn.photoURL ?
                                        <img src={loggedIn.photoURL} alt="Profile" width="33" height="33" /> :
                                        <ProfileSVG />}
                                </Link>
                            )}

                        </div>
                        <div className="fixed bottom-0 left-0 right-0 lg:relative bg-[rgb(32,32,32)] lg:bg-transparent flex-1 flex justify-between lg:justify-center items-center px-6 lg:px-0  py-4 lg:py-0 md:px-12 lg:gap-x-3.5 xl:gap-x-4 2xl:gap-x-6">
                            {shared.links.map(({ name, url, activeSVG, passiveSVG }, index) => (
                                <Link
                                    key={index + "a"}
                                    to={url}
                                    className={`text-[11px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] lg:py-[22px] font-normal flex flex-col items-center gap-y-2 ${location.pathname === url
                                        ? "gradient-text border-b border-[#4AFC2D]"
                                        : "text-white border-b border-transparent"
                                        }`}>
                                    <div className="lg:hidden">{location.pathname === url ? (<>{activeSVG}</>) : (<>{passiveSVG}</>)}</div> {name}
                                </Link>
                            )).interpolate((index) => <div key={index} className="hidden lg:block lg:relative h-[18px] w-[1px] bg-[rgba(255,255,255,0.32)]" />)}
                            {/* 
                            <div className="   custom-mobile-menu">
                                {shared.links.map(({ name, url, activeSVG, passiveSVG }, index) =>
                                    <Link key={index} to={url} className="flex flex-col items-center gap-y-2">
                                    
                                        <p className={`text-white text-[11px] font-normal  ${location.pathname === url ? "gradient-text" : "text-white"}`}>{name} </p>
                                    </Link>)}
                            </div> */}
                        </div>

                    </nav>

                </header>
                <main className="bg-[rgb(32,32,32)] bg-opacity-60 lg:rounded-[20px] lg:border lg:border-[rgba(78,78,78,0.36)] lg:m-[20px] flex-1">
                    {main}
                </main>
            </div>
        </div>
    );
};



export default NewLayout;

export type LayoutComponentProps = { main: ReactNode, sidebar: ReactNode, mobileSidebar: ReactNode, sidebarBg?: boolean, hideTitle?: boolean }
export type LayoutComponent = React.FC<LayoutComponentProps>
export const withLayout = (shared: SharedProps, name?: string, fullSCreen?: boolean) =>
    ({ main, sidebar, mobileSidebar, sidebarBg, hideTitle }: LayoutComponentProps) => {
        return <NewLayout main={main} sidebar={sidebar} mobileSidebar={mobileSidebar} shared={shared} sidebarBg={sidebarBg} name={!hideTitle ? name : undefined} fullScreen={fullSCreen} />;
    };
