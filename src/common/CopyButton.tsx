import React from "react";
import { useEffect, useState } from "react";


export function useCopyButton<CopyType>(timeout: number = 3000, compareFunction: (copy: CopyType, type: CopyType) => boolean = (lastCopy, type) => lastCopy === type) {
    const [lastCopy, setLastCopy] = useState<CopyType | undefined>(undefined);

    useEffect(() => {
        const t = lastCopy !== undefined ? setTimeout(() => setLastCopy(undefined), timeout) : null;
        return () => {
            if (t) clearTimeout(t)
        };
    }, [timeout, lastCopy, setLastCopy]);

    const copyToClipboard = (value: string, type: CopyType) => {
        navigator.clipboard
            .writeText(value)
            .then(() => {
                setLastCopy(type);
            })
            .catch((error) => {
                console.error("Error copying to clipboard: ", error);
            });
    };

    const checkCopied = (type: CopyType): boolean => lastCopy !== undefined && compareFunction(lastCopy, type)

    return { copyToClipboard, checkCopied };
}

export const CopyButton = (props:{copyOnClick:()=>void, copied:boolean}) => {
    return <button
        className="cursor-pointer ml-3"
        onClick={() => props.copyOnClick()}>
        {props.copied ? (
            CopySVG) : (CheckMarkSVG)}
    </button>
}

export const CopySVG = <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="12"
    height="12"
    viewBox="0,0,256,256">
    <g
        fill="#ffffff"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontSize="none"
        textAnchor="none"
        style={{ mixBlendMode: "normal" }}>
        <g transform="scale(5.12,5.12)">
            <path d="M42.875,8.625c-0.03125,0.00781 -0.0625,0.01953 -0.09375,0.03125c-0.26172,0.06641 -0.48828,0.23438 -0.625,0.46875l-20.4375,31.6875l-14.0625,-12.6875c-0.24609,-0.3125 -0.65625,-0.44922 -1.04297,-0.34766c-0.38672,0.10156 -0.67187,0.42578 -0.73047,0.82031c-0.05859,0.39453 0.12109,0.78516 0.46094,0.99609l14.90625,13.5c0.21875,0.19141 0.51172,0.27734 0.80078,0.23438c0.28906,-0.04297 0.54297,-0.20703 0.69922,-0.45312l21.09375,-32.6875c0.23047,-0.32812 0.24219,-0.76172 0.03125,-1.10156c-0.21094,-0.33984 -0.60547,-0.51953 -1,-0.46094z"></path>
        </g>
    </g>
</svg>

export const CheckMarkSVG = <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="14"
    viewBox="0 0 12 14"
    fill="none">
    <path
        d="M2.66653 3.00004V1.00004C2.66653 0.631854 2.96501 0.333374 3.3332 0.333374H11.3332C11.7014 0.333374 11.9999 0.631854 11.9999 1.00004V10.3334C11.9999 10.7016 11.7014 11 11.3332 11H9.3332V12.9994C9.3332 13.368 9.03327 13.6667 8.662 13.6667H0.671107C0.300393 13.6667 0 13.3703 0 12.9994L0.0017333 3.66729C0.00179997 3.29878 0.30176 3.00004 0.672947 3.00004H2.66653ZM1.33495 4.33337L1.33346 12.3334H7.99987V4.33337H1.33495ZM3.99987 3.00004H9.3332V9.66671H10.6665V1.66671H3.99987V3.00004Z"
        fill="white"
    />
</svg>
