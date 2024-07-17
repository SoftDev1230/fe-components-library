import React from "react";
import {Link, useLocation} from "react-router-dom";

interface MobileMenuProps {
    links: {
        name: string,
        url: string,
        activeSVG: React.ReactElement<SVGElement>
        passiveSVG: React.ReactElement<SVGElement>
    }[]
}

const MobileMenu = (props: MobileMenuProps) => {
    const location = useLocation();

    return (
        <div className="flex justify-between px-6 md:px-12 lg:px-4 xl:px-6 py-4 custom-mobile-menu">
            {props.links.map(({name, url, activeSVG, passiveSVG}, index) =>
                <Link key={index} to={url} className="flex flex-col items-center gap-y-2">
                    <div>{location.pathname === url ? (<>{activeSVG}</>) : (<>{passiveSVG}</>)}</div>
                    <p className={`text-white text-[11px] font-normal  ${location.pathname === url ? "gradient-text" : "text-white"}`}>{name} </p>
                </Link>)}
        </div>
    );
};

export default MobileMenu;
