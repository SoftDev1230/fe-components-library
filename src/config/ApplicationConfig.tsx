import React, { ReactNode, Suspense, useContext } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Preloader from "../layout/preLoader/PreLoader";
import { LayoutComponent, SharedProps, withLayout } from "../layout/Layout";
import LayoutNoSidebar from "../layout/LayoutNoSidebar";
import { AuthContext } from "./AuthContext";
import { ModalProvider } from "./Modal";
import { RequireAdmin, RequireLoggedIn, RequireNotLoggedIn } from "./RequireLoggedIn";
import UserInfo from "../pages/UserInfo";


interface InjectedProps {
    shared: SharedProps;
    Component: LayoutComponent;
}

export type InjectableComponent = React.FC<InjectedProps>

interface PageLayout {
    name: string;
    url: string;
    activeSVG: React.ReactElement<SVGElement>;
    passiveSVG: React.ReactElement<SVGElement>;
    content: InjectableComponent;
}

interface ApplicationConfigProps {
    main: PageLayout;
    accountUrl: string;
    login: { url: string, content: ReactNode };
    createAccount: { url: string, content: ReactNode };
    topLogo: ReactNode;
    pages: PageLayout[];
    adminPages: PageLayout[];
    userInfoMain: ReactNode;
}


const ApplicationConfig = (props: ApplicationConfigProps) => {
    const isLoggedIn = useContext(AuthContext)

    const isAdmin = isLoggedIn !== 'loading' && !!isLoggedIn && isLoggedIn.isAdmin
    const pages = isAdmin ? props.adminPages.concat(props.pages) : props.pages
    const shared = {
        accountUrl: props.accountUrl,
        loginUrl: props.login.url,
        links: (pages.concat(props.main)).map((page) => {
            return { name: page.name, url: page.url, activeSVG: page.activeSVG, passiveSVG: page.passiveSVG }
        }),
        sidebarTitle: <>
            <a href="/">
                <img src="/gnss-fill.svg" alt="logo" className="lg:w-[25px] xl:w-[30px]" />
            </a>
            <p className="uppercase lg:text-[14px] xl:text-[20px]">
                <span className="gradient-text mr-2 font-medium ">  SURVEYING HUB</span> Cloud
            </p></>
    }

    return (<ModalProvider><Router><Suspense fallback={<Preloader />}>
        <Routes>
            <Route path={props.main.url} element={<RequireLoggedIn isLoggedIn={isLoggedIn} navigateLocation={props.login.url}><props.main.content shared={shared} Component={withLayout(shared)} /></RequireLoggedIn>} />
            {props.adminPages.length > 0 &&
                props.adminPages.map((page, index) =>
                    <Route path={page.url} key={index} element={<RequireLoggedIn isLoggedIn={isLoggedIn} navigateLocation={props.login.url}>{(loggedIn) =>
                        <RequireAdmin isLoggedIn={loggedIn} navigateLocation={props.login.url} >
                            <page.content shared={shared} Component={withLayout(shared, page.name)} />
                        </RequireAdmin>}
                    </RequireLoggedIn>} />
                )
            }
            {props.pages.map((page, index) =>
                <Route path={page.url} key={index} element={<RequireLoggedIn isLoggedIn={isLoggedIn} navigateLocation={props.login.url}><page.content shared={shared} Component={withLayout(shared, page.name)} /></RequireLoggedIn>} />
            )}
            <Route path={props.accountUrl} element={<RequireLoggedIn isLoggedIn={isLoggedIn} navigateLocation={props.login.url}>{(loggedIn) => <UserInfo loggedIn={loggedIn} main={props.userInfoMain} Component={withLayout(shared)} />}</RequireLoggedIn>} />
            <Route path={props.login.url} element={<RequireNotLoggedIn isLoggedIn={isLoggedIn} navigateLocation={props.main.url}><LayoutNoSidebar topbar={props.topLogo} content={props.login.content} /></RequireNotLoggedIn>} />
            <Route path={props.createAccount.url} element={<RequireNotLoggedIn isLoggedIn={isLoggedIn} navigateLocation={props.main.url}> <LayoutNoSidebar topbar={props.topLogo} content={props.createAccount.content} /></RequireNotLoggedIn>} />
            <Route path="*" element={<Navigate to={isLoggedIn ? props.main.url : props.login.url} />} />
        </Routes>
    </Suspense></Router></ModalProvider>
    );
};

export default ApplicationConfig;
