import React, {useContext} from "react";
import Button from "../common/Button";
import {Link} from "react-router-dom";
import {AuthContext} from "../config/AuthContext";

//const loggedIn = {photoURL: undefined, displayName: "Justin van Zanten", email: "justin@surveyinghub.com"}

const MobileHamburgerMenu = (props: { toggleSidebar: any }) => {
    const loggedIn = useContext(AuthContext);
    return (
        <div
            className="flex flex-col justify-between mt-[76px] sidebar-custom-vh px-5 bg-carbon-black3 sidebar-custom-z relative">
            <div className="flex flex-col">
                {loggedIn !=='loading'&& loggedIn &&
                    <div className="flex items-center gap-x-[30px] w-full mt-[50px]">
                        <div className=" rounded-[14.603px] bg-[#343434] px-[20px] py-[20px]">
                            {loggedIn.photoURL ?
                                <img src={loggedIn.photoURL} alt="Profile" width="33" height="33"/> :
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="33"
                                    height="33"
                                    viewBox="0 0 33 33"
                                    fill="none">
                                    <path
                                        d="M27.1213 29.7758H24.4661V27.1206C24.4661 26.0643 24.0465 25.0513 23.2996 24.3044C22.5527 23.5575 21.5396 23.1379 20.4833 23.1379H12.5178C11.4615 23.1379 10.4485 23.5575 9.70158 24.3044C8.95467 25.0513 8.53506 26.0643 8.53506 27.1206V29.7758H5.87988V27.1206C5.87988 25.3601 6.57923 23.6717 7.82409 22.4269C9.06894 21.182 10.7573 20.4827 12.5178 20.4827H20.4833C22.2438 20.4827 23.9322 21.182 25.1771 22.4269C26.4219 23.6717 27.1213 25.3601 27.1213 27.1206V29.7758ZM16.5006 17.8275C15.4545 17.8275 14.4187 17.6215 13.4523 17.2212C12.4859 16.8209 11.6078 16.2341 10.8681 15.4945C10.1284 14.7548 9.5417 13.8767 9.14139 12.9103C8.74109 11.9439 8.53506 10.908 8.53506 9.862C8.53506 8.81595 8.74109 7.78015 9.14139 6.81373C9.5417 5.84731 10.1284 4.9692 10.8681 4.22953C11.6078 3.48986 12.4859 2.90313 13.4523 2.50282C14.4187 2.10252 15.4545 1.89648 16.5006 1.89648C18.6132 1.89648 20.6392 2.73571 22.133 4.22953C23.6269 5.72335 24.4661 7.74941 24.4661 9.862C24.4661 11.9746 23.6269 14.0006 22.133 15.4945C20.6392 16.9883 18.6132 17.8275 16.5006 17.8275ZM16.5006 15.1723C17.909 15.1723 19.2597 14.6129 20.2556 13.617C21.2514 12.6211 21.8109 11.2704 21.8109 9.862C21.8109 8.45361 21.2514 7.1029 20.2556 6.10702C19.2597 5.11114 17.909 4.55166 16.5006 4.55166C15.0922 4.55166 13.7415 5.11114 12.7456 6.10702C11.7497 7.1029 11.1902 8.45361 11.1902 9.862C11.1902 11.2704 11.7497 12.6211 12.7456 13.617C13.7415 14.6129 15.0922 15.1723 16.5006 15.1723Z"
                                        fill="url(#paint0_linear_2_12820)"/>
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_2_12820"
                                            x1="7.6323"
                                            y1="5.98225"
                                            x2="28.4654"
                                            y2="7.22396"
                                            gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#4AFC2D"/>
                                            <stop offset="1" stopColor="#1EA707"/>
                                        </linearGradient>
                                    </defs>
                                </svg>}
                        </div>

                        <div>
                            <p className="text-[16px] text-white font-medium mb-[2px]">
                                {loggedIn.username || "RTK User"}
                            </p>
                            <p className="text-[14px] text-[#AEAEAE] font-normal">
                                {loggedIn.email || ""}
                            </p>
                        </div>
                    </div>
                }
                {loggedIn !=='loading'&& loggedIn && (
                    <div className="mt-[17px] rounded-[12.94px] bg-opacity-40 bg-[#252525] py-[17px] text-center">
                        <Link
                            to="/users"
                            className="text-[13px] font-normal  cursor-pointer hover:text-white text-white"
                            onClick={() => props.toggleSidebar(false)}>
                            Account Settings
                        </Link>
                    </div>
                )}
            </div>
            {loggedIn !=='loading'&& loggedIn ? (
                <div className="pt-5 pb-4" onClick={() => props.toggleSidebar(false)}>
                    <div className="mb-[9px]">
                        <button
                            className="w-full justify-center flex items-center gap-x-[0px] bg-transparent hover:bg-logout-hover text-[#F44336] h-[36.5px] px-10 lg:px-10 font-normal text-[12px] lg:text-[14px] xl:text-[16px] rounded-[15px] lg:rounded-[19px] border border-logout-border"
                            onClick={() => {
                                loggedIn.logout()
                            }}>
                            Logout
                        </button>
                    </div>
                </div>
            ) : (
                <div className="pt-5 pb-4">
                    <Button
                        type="secondary"
                        label="Login"
                        padding="big"
                        onClick={() => {
                            alert("login")
                        }}/>
                    <Button
                        label="Create Account"
                        padding="big"
                        onClick={() => {
                            alert("create account")
                        }}/>
                </div>
            )}
        </div>
    );
};

export default MobileHamburgerMenu;
