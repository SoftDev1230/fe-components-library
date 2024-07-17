import React, {useContext} from "react";
import logo from "../assets/images/logo.png";
import {Link, useLocation} from "react-router-dom";
import '../utils/arrayExtensions';
import {CloseHamburgerSVG, HamburgerSVG, ProfileSVG} from "./SVGs";
import {AuthContext} from "../config/AuthContext";

interface MainTopBarSpecificProps {
    toggleSidebar: any
    isSidebarOpen: boolean
}

export interface MainTopBarSharedProps {
    accountUrl: string
    loginUrl: string
    links: { name: string, url: string }[]
}

interface MainTopBarProps extends MainTopBarSharedProps, MainTopBarSpecificProps {
}

const MainTopbar = (props: MainTopBarProps) => {
    const {
        toggleSidebar,
        isSidebarOpen,
        links
    } = props
    const location = useLocation();
    const loggedIn = useContext(AuthContext);
    return (
        <>
            <header
                className={`block lg:hidden fixed top-0 left-0 w-full py-6 px-4 md:px-8 ${isSidebarOpen ? "mobile-custom-topbar-style-z" : "mobile-custom-topbar-style"}`}>
                <div className="flex justify-between items-center">
                    <div className="flex gap-x-4">
                        <button
                            onClick={toggleSidebar}
                            className="text-white focus:outline-none lg:hidden">
                            {isSidebarOpen ? (<CloseHamburgerSVG/>) : (<HamburgerSVG/>)}
                        </button>
                        <div className="flex flex-row justify-center items-center gap-x-4">
                            <a href="/"> <img src={logo} alt="logo" className="w-[25px]"/> </a>
                            <p className="uppercase text-[18px]">
                                RTK <span className="gradient-text ml-2 text-[18px] "> Direct Cloud  </span>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <header
                className="hidden lg:block border-r rounded-[18.721px] bg-[rgba(32,32,32,0.63)] border-[0.9px] border-solid border-[rgba(78,78,78,0.36)] fixed top-0 left-0 w-full lg:w-[76%] xl:w-[74%] z-10 lg:ml-[22.5%] xl:ml-[24.5%] md:mt-[20px] md:mr-[1%] h-auto topbar-map-custom-z">
                <nav className="flex justify-between items-center lg:px-4 xl:px-5 2xl:px-8">
                    <div className="flex-1 flex justify-center items-center lg:gap-x-3.5 xl:gap-x-4 2xl:gap-x-6">
                        {links.map(({name, url}, index) => (
                            <Link
                                key={index+"a"}
                                to={url}
                                className={`hover:text-white lg:text-[13px] xl:text-[15px] 2xl:text-[16px] py-[22px] font-normal ${
                                    location.pathname === url
                                        ? "gradient-text border-b border-[#4AFC2D]"
                                        : "text-white border-b border-transparent"
                                }`}>
                                {name}
                            </Link>
                        )).interpolate((index) => <div key={index} className="h-[18px] w-[1px] bg-[rgba(255,255,255,0.32)]"/>)}
                    </div>
                    <div>
                        <div className="flex justify-center items-center lg:gap-x-2 xl:gap-x-3 py-2">
                            {loggedIn ==='loading'|| !loggedIn ? (
                                <>
                                    <Link
                                        to={props.loginUrl}
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
                                    to={props.accountUrl}
                                    className="border border-transparent bg-[#343434] hover:bg-transparent rounded-[11px] hover:border-green-500 px-[12px] py-[12px] xl:py-[12px] 2xl:py-[12.5px] xl:px-[16px]">
                                    {loggedIn.photoURL ?
                                        <img src={loggedIn.photoURL} alt="Profile" width="33" height="33"/> :
                                        <ProfileSVG/>}
                                </Link>
                            )}
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default MainTopbar;
