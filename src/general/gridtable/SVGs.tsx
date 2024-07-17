import React from "react";
import {HexColor} from "../../utils/types";

export const GridSVG = (props: { color: HexColor }) => {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none">
        <path
            d="M13.8157 9.86808H9.86833V13.8154H13.8157V9.86808ZM15.7894 9.86808V13.8154H18.7499V9.86808H15.7894ZM13.8157 18.7496V15.7891H9.86833V18.7496H13.8157ZM15.7894 18.7496H18.7499V15.7891H15.7894V18.7496ZM13.8157 4.93389H9.86833V7.89441H13.8157V4.93389ZM15.7894 4.93389V7.89441H18.7499V4.93389H15.7894ZM7.89465 9.86808H4.93413V13.8154H7.89465V9.86808ZM7.89465 18.7496V15.7891H4.93413V18.7496H7.89465ZM7.89465 4.93389H4.93413V7.89441H7.89465V4.93389ZM3.94729 2.96021H19.7367C20.2818 2.96021 20.7236 3.40203 20.7236 3.94705V19.7365C20.7236 20.2815 20.2818 20.7233 19.7367 20.7233H3.94729C3.40228 20.7233 2.96045 20.2815 2.96045 19.7365V3.94705C2.96045 3.40203 3.40228 2.96021 3.94729 2.96021Z"
            fill="url(#paint0_linear_1_19973)"/>
        <defs>
            <linearGradient
                id="paint0_linear_1_19973"
                x1="4.42591"
                y1="5.56342"
                x2="21.8032"
                y2="6.92283"
                gradientUnits="userSpaceOnUse">
                <stop stopColor={props.color}/>
                <stop offset="1" stopColor={props.color}/>
            </linearGradient>
        </defs>
    </svg>
}

export const ListSVG = (props: { color: HexColor }) => {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={props.color}>
        <path
            d="M8.21057 3.94752H21.0395V5.9212H8.21057V3.94752ZM4.75663 6.41462C3.9391 6.41462 3.27637 5.75189 3.27637 4.93436C3.27637 4.11683 3.9391 3.4541 4.75663 3.4541C5.57416 3.4541 6.23689 4.11683 6.23689 4.93436C6.23689 5.75189 5.57416 6.41462 4.75663 6.41462ZM4.75663 13.3225C3.9391 13.3225 3.27637 12.6597 3.27637 11.8422C3.27637 11.0247 3.9391 10.362 4.75663 10.362C5.57416 10.362 6.23689 11.0247 6.23689 11.8422C6.23689 12.6597 5.57416 13.3225 4.75663 13.3225ZM4.75663 20.1317C3.9391 20.1317 3.27637 19.4689 3.27637 18.6514C3.27637 17.8339 3.9391 17.1712 4.75663 17.1712C5.57416 17.1712 6.23689 17.8339 6.23689 18.6514C6.23689 19.4689 5.57416 20.1317 4.75663 20.1317ZM8.21057 10.8554H21.0395V12.8291H8.21057V10.8554ZM8.21057 17.7633H21.0395V19.737H8.21057V17.7633Z"
            fill={props.color}/>
    </svg>
}

export const FilterSVG = () => {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
        className="my-auto lg:mr-2">
        <g clipPath="url(#clip0_1_19982)">
            <path
                d="M8.62076 1.93079C12.2183 1.93079 15.138 4.85051 15.138 8.44803C15.138 12.0455 12.2183 14.9653 8.62076 14.9653C5.02324 14.9653 2.10352 12.0455 2.10352 8.44803C2.10352 4.85051 5.02324 1.93079 8.62076 1.93079ZM8.62076 13.517C11.421 13.517 13.6897 11.2483 13.6897 8.44803C13.6897 5.64706 11.421 3.37906 8.62076 3.37906C5.81979 3.37906 3.55179 5.64706 3.55179 8.44803C3.55179 11.2483 5.81979 13.517 8.62076 13.517ZM14.7651 13.5684L16.8137 15.6163L15.789 16.6409L13.7411 14.5923L14.7651 13.5684Z"
                fill="white"/>
        </g>
        <defs>
            <clipPath id="clip0_1_19982">
                <rect
                    width="17.3793"
                    height="17.3793"
                    fill="white"
                    transform="translate(0.655273 0.482666)"/>
            </clipPath>
        </defs>
    </svg>
}

export const IndicatorSVG = (props: { color: HexColor }) => {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none">
        <circle cx="9" cy="9" r="9" fill={`url(#paint0_linear_1_19908)`}/>
        <defs>
            <linearGradient
                id={"paint0_linear_1_19908"}
                x1="1.485"
                y1="2.63793"
                x2="19.094"
                y2="4.01547"
                gradientUnits="userSpaceOnUse">
                <stop stopColor={props.color}/>
                <stop offset="1" stopColor={props.color}/>
            </linearGradient>
        </defs>
    </svg>
}
