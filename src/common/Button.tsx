import React from 'react';

type ButtonType = 'primary' | 'secondary' | 'dangerous' | 'black' | 'dotted' | 'disabled'

type ButtonStyle = {
    type: 'primary' | 'secondary' | 'dangerous' | 'black' | 'dotted'
    onClick: (() => void) | string | 'submit',
} | { type: 'disabled' }


type PaddingType = 'big' | 'width' | 'normal' | 'small' | 'default';

interface ButtonProps {
    label: string;
    icon?: { src: string, width: string };
    style: ButtonStyle;
    padding?: PaddingType;
}

interface OnClickButtonProps {
    label: string;
    icon?: { src: string, width: string };
    type?: ButtonType;
    onClick: (() => void) | string | 'submit',
    padding?: PaddingType;
}

const buttonTypeClasses: { [key in ButtonType]: string } = {
    primary: 'text-[#0D0D0D] bg-gradient-to-r from-bg-green1 to-bg-green2 hover:text-white hover:bg-none border border-transparent hover:border-solid hover:border-bg-green1',
    secondary: 'border border-[#4AFC2D] from-bg-green1 to-bg-green2 hover:border-transparent hover:bg-gradient-to-r hover:text-[#0D0D0D]',
    dangerous: 'border border-[#F44336] hover:border-transparent hover:bg-gradient-to-r hover:bg-[#F4433680] hover:text-[#0D0D0D]',
    black: 'border border-carbon-black bg-carbon-black text-white',
    dotted: 'connect-hotspot-button',
    disabled: 'bg-white/45 cursor-not-allowed'
};

const paddingTypeClasses: { [key in PaddingType]: string } = {
    big: 'w-full rounded-[13px] mt-[9px] text-[14px] lg:text-[16px] font-normal py-[17px] px-6 ',
    width: 'w-full rounded-[17px] lg:rounded-[20px] text-[16px] font-medium py-[16px] md:py-[17px]',
    normal: 'rounded-[13px] lg:rounded-[21px] text-[14px] lg:text-[16px] font-normal py-[16px] px-3 md:px-12 xl:py-[20px] lg:px-10 xl:px-12 2xl:px-16',
    small: 'rounded-[17px] xl:rounded-[20px] py-[15px] px-3 lg:py-[13px] xl:py-[13px] 2xl:py-[13px] xl:px-6 text-[12px] xl:text-[14px] lg:text-[12px] 2xl:text-[15px]',
    default: 'rounded-[13px] lg:rounded-[13px] text-[16px] lg:text-[16px] font-normal py-[10px] px-[21px]',
};


const Button: React.FC<ButtonProps | OnClickButtonProps> = (props) => {
    const style = ('onClick' in props) ? { type: props.type || 'primary', onClick: props.onClick } : props.style
    const { label, padding = 'normal', icon } = props


    const buttonClasses = `${buttonTypeClasses[style.type]} ${paddingTypeClasses[padding]}${!!icon ? " flex justify-start items-center gap-x-5 md:px-7" : ""}`;
    const contentElem = <>
        {icon && <div className="w-[50px] flex justify-center items-center">
            <img src={icon.src} alt="logo" width={icon.width} />
        </div>}
        {label}</>

    if (style.type === 'disabled') {
        return (
            <button className={buttonClasses} disabled>
                {contentElem}
            </button>
        );
    } else if (style.onClick === 'submit') {
        return (
            <button className={buttonClasses} type="submit">
                {contentElem}
            </button>
        );
    } else if (typeof style.onClick === 'string') {
        return (<a href={style.onClick}>
            <button className={buttonClasses}>
                {contentElem}
            </button>
        </a>)
    } else {
        return (
            <button onClick={style.onClick} className={buttonClasses}>
                {contentElem}
            </button>)
    }
};

export default Button;
