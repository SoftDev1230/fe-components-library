import React from "react";

type SidebarMiniStatsCardProps = {
    bg: string;
    title: string;
    value: string;
    statusIndicator?: ColorIndicator
}

type ColorIndicator = {
    from: string;
    to: string
}

export const Green: ColorIndicator = {from: "#4AFC2D", to: "#1EA707"}
export const Red: ColorIndicator = {from: "#FD0303", to: "#F31A1A"}
export const Yellow: ColorIndicator = {from: "#F9FE00", to: "#F9FE00"}
export const Blue: ColorIndicator = {from: "#249CF3", to: "#249CF3"}

const SidebarMiniStatsCard = (props: SidebarMiniStatsCardProps) => {
    return (
        <div
            className="rounded-[7px] px-[8px] pt-[8px] pb-[8px] lg:px-[12px] xl:pt-[16px] xl:pb-[6px] relative min-h-[80px] xl:min-h-[100px] 2xl:min-h-auto"
            style={{backgroundColor: props.bg}}>
            {props.statusIndicator !== undefined && (
                <div className="absolute right-[15px] top-[10px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none">
                        <circle cx="8" cy="8" r="8" fill="url(#paint0_linear_1_18597)"/>
                        <defs>
                            <linearGradient
                                id="paint0_linear_1_18597"
                                x1="1.32"
                                y1="2.34483"
                                x2="16.9724"
                                y2="3.5693"
                                gradientUnits="userSpaceOnUse">
                                <stop
                                    stopColor={props.statusIndicator.from}/>
                                <stop
                                    offset="1"
                                    stopColor={props.statusIndicator.to}/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            )}
            <p className="text-[12px] lg:text-[13px] xl:text-[14px] text-light-gray mb-2 custom-font-400">
                {props.title}
            </p>
            <p className="text-[14px] lg:text-[15px] xl:text-[17px] text-white custom-font-400">
                {props.value}
            </p>
        </div>
    );
};

export default SidebarMiniStatsCard;
