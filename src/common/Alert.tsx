import React, { ReactNode } from "react";
import { AlertType } from "../utils/types";

interface AlertProps {
    type: AlertType
    children: ReactNode
}
const alertTypeClasses: { [key in AlertType]: string } = {
    error: 'bg-[#fff2f0] border-[#ffccc7]',
    warning: 'bg-[#fffbe6] border-[#ffe58f]',
    info: 'bg-[#e6f7ff] border-[#91d5ff]',
};
const Alert = (props: AlertProps) => {
    return (<div className={`flex align-center justify-center text-[14px] text-black/85 border rounded-[2px] py-[8px] px-[15px] ${alertTypeClasses[props.type]}`}>
        {props.children}
    </div>)
}

export default Alert;
