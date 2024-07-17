import React from "react";

export const HamburgerSVG = () => <svg
    className="w-6 h-6"
    fill="white"
    stroke="currentColor"
    viewBox="0 0 24 24">
    {/* Hamburger icon */}
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"/>
</svg>

export const CloseHamburgerSVG = () => <svg
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="27"
    viewBox="0 0 27 27"
    fill="none">
    <path
        d="M21.375 13.5L5.625 13.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"/>
    <path
        d="M12.375 20.25L5.625 13.5L12.375 6.75"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"/>
</svg>

export const ProfileSVG = () => <svg
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="33"
    viewBox="0 0 24 24"
    fill="none">
    <g clipPath="url(#clip0_1_19464)">
        <path
            d="M20 22H18V20C18 19.2044 17.6839 18.4413 17.1213 17.8787C16.5587 17.3161 15.7956 17 15 17H9C8.20435 17 7.44129 17.3161 6.87868 17.8787C6.31607 18.4413 6 19.2044 6 20V22H4V20C4 18.6739 4.52678 17.4021 5.46447 16.4645C6.40215 15.5268 7.67392 15 9 15H15C16.3261 15 17.5979 15.5268 18.5355 16.4645C19.4732 17.4021 20 18.6739 20 20V22ZM12 13C11.2121 13 10.4319 12.8448 9.7039 12.5433C8.97595 12.2417 8.31451 11.7998 7.75736 11.2426C7.20021 10.6855 6.75825 10.0241 6.45672 9.2961C6.15519 8.56815 6 7.78793 6 7C6 6.21207 6.15519 5.43185 6.45672 4.7039C6.75825 3.97595 7.20021 3.31451 7.75736 2.75736C8.31451 2.20021 8.97595 1.75825 9.7039 1.45672C10.4319 1.15519 11.2121 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7C18 8.5913 17.3679 10.1174 16.2426 11.2426C15.1174 12.3679 13.5913 13 12 13ZM12 11C13.0609 11 14.0783 10.5786 14.8284 9.82843C15.5786 9.07828 16 8.06087 16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11Z"
            fill="url(#paint0_linear_1_19464)"/>
    </g>
    <defs>
        <linearGradient
            id="paint0_linear_1_19464"
            x1="5.32"
            y1="4.07759"
            x2="21.0125"
            y2="5.01291"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#4AFC2D"/>
            <stop offset="1" stopColor="#1EA707"/>
        </linearGradient>
        <clipPath id="clip0_1_19464">
            <rect width="24" height="24" fill="white"/>
        </clipPath>
    </defs>
</svg>

export const LogoutSVG = () =>
    <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"
         style={{
             width: "50%", height: "50%",
             display: "inline-block",
             fill: "currentcolor"
         }}>
        <path
            d="m17 8-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"></path>
    </svg>
