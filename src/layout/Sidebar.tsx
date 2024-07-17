import React, { ReactNode } from "react";
import MobileHamburgerMenu from "./MobileHamburgerMenu";

type SidebarProps = {
    isSidebarOpen: boolean;
    toggleSidebar: any;
    children: any;
    blackBackground?: boolean;
    name?: string;
    title: ReactNode;
}

const Sidebar = ({isSidebarOpen, toggleSidebar, children, blackBackground, name, title}: SidebarProps) => {
    return (
        <aside
            className={`overflow-hidden sidebar-custom-height fixed inset-y-0 left-0 w-full lg:w-[20%] xl:w-[23%] lg:ml-[1%] lg:my-[20px] lg:mr-[1%] transition-transform duration-300 transform rounded-[20px] border-[0.9px]
              ${!!blackBackground ? 'custom-sidebar-style-rtk' : 'custom-sidebar-style'}
              ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:left-0
              ${isSidebarOpen ? "lg:translate-y-0" : "-translate-y-full"} lg:translate-y-0`}>
            <div className="custom-z h-full overflow-auto flex-col flex">
                <div
                    className="hidden lg:flex lg:flex-row lg:justify-start lg:items-center lg:gap-x-3 xl:gap-x-4 lg:pl-3 xl:pl-7 py-9">
                    {title}
                </div>
                <div className="mt-[50px] lg:mt-0 hidden lg:block px-4 xl:px-6 mb-[30px] pt-[10px] lg:pt-0 flex-grow">
                    {name &&
                        <p className="text-white text-[16px] xl:text-[18px] text-center lg:text-left font-semibold">{name}</p>}
                    {children}
                </div>
                <div className="block lg:hidden bg-black custom-z">
                    <MobileHamburgerMenu toggleSidebar={toggleSidebar}/>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
