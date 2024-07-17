import React from "react";

export const PageTitle = (props: { icon: string, title: string }) =>
    <h1 className="flex items-center justify-center text-center gap-x-4 text-[24px]">
        <PageTitleIcon icon={props.icon}/> {props.title}</h1>
const PageTitleIcon = (props: { icon: string }) =>
    <div
        className="hidden xl:inline-flex items-center justify-center h-fit w-fit rounded-[11px] bg-[#343434] bg-opacity-40 p-[8px]">
        <img
            src={props.icon}
            alt="icon"
            className="lg:w-[24px] lg:h-[24px] xl:w-[32px] xl:h-[32px]"/>
    </div>
