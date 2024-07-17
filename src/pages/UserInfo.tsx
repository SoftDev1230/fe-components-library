import { ReactNode } from "react"
import { AuthContextInterface } from "../config/AuthContext"
import { SharedProps } from "../layout/Layout"
import React from "react"
import { LogoutSVG } from "../layout/SVGs"

type UserInfoProps = {
    loggedIn: AuthContextInterface ;
       main: ReactNode;
     Component: React.FC<{main: ReactNode, sidebar: ReactNode, mobileSidebar:ReactNode}>;
}

const UserInfo = ( { Component, loggedIn, main}: UserInfoProps) => {
          const sidebar =
            <div className="flex flex-col justify-between h-full">
                <button
                    className="w-full mt-auto justify-center flex items-center gap-x-[0px] bg-transparent hover:bg-logout-hover text-[#F44336] h-[36.5px] px-10 lg:px-10 custom-font-400 text-[12px] lg:text-[14px] xl:text-[16px] rounded-[15px] lg:rounded-[19px] border border-logout-border"
                    onClick={() => loggedIn.logout()}> Logout <span aria-hidden="true" style={{
                        width: "40px",
                        height: "40px",
                        fontSize: "1.5rem"
                    }}><LogoutSVG /></span>
                </button>
            </div>

        return <Component sidebar={sidebar} mobileSidebar={<>mobileSidebar</>}
            main={main} />
}

export default UserInfo;
