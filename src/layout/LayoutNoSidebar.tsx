import React, {ReactNode} from "react";
import "./LayoutNoSidebar.css"

interface LayoutNoSidebarProps {
    topbar: ReactNode;
    content: ReactNode;
}

const LayoutNoSidebar = ({topbar, content}: LayoutNoSidebarProps) => {
    return <div className="placement min-h-screen px-6 md:px-8 lg:px-8 pt-0 md:pt-6">
        <div
            className="rounded-[18.721px] border border-opacity-35 border-[#4E4E4E] bg-grey-light bg-opacity-65 backdrop-filter-[2.5px] py-[20px] flex pl-[30px] body-container">
            {topbar}
        </div>
        <div className="w-full card-width  mx-auto text-center mt-8 md:mt-20">
            {content}
        </div>
    </div>
}

export default LayoutNoSidebar;
