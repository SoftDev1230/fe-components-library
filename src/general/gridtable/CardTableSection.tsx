import React, { ReactNode, useMemo, useState } from "react";
import SectionGrid from "./SectionGrid";
import SectionTable from "./SectionTable";
import { FilterSVG, GridSVG, ListSVG } from "./SVGs";
import "./CardTableSection.css"
import { HexColor } from "../../utils/types";
import useTabFoundation from "../../common/useTabFoundation";

type TabType = 'grid' | 'table'
type ReservedKeys = 'action' | 'name';
export type ButtonColor = "green" | "red"

export interface DataType<T> {
    indicatior?: HexColor;
    name: string;
    editAction?: () => void,
    records: T;
    actionButton: { text: string, action: () => void, color?: ButtonColor }
}

type StringObject = Record<string, ReactNode>;

interface CardTableSectionProps<T extends StringObject> {
    header: ReactNode;
    nameHeader?: string;
    headers: { [K in keyof T]: { header: string, colored?: boolean } }
    actionHeader?: string;
    data: DataType<T>[];
    newAction?: { topText: ReactNode, bottomText: ReactNode, action: () => void };
    filter?: (datum: DataType<Omit<T, ReservedKeys>>, searchTerm: string) => boolean;
}

const CardTableSection = <T extends StringObject>(
    {
        header,
        nameHeader,
        headers,
        actionHeader,
        data,
        newAction,
        filter
    }: CardTableSectionProps<T>) => {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredData = useMemo(() => !filter ? data : data.filter(item => filter(item, searchTerm)), [searchTerm, data]);

    const views: { [key in TabType]: ReactNode } = {
        grid: <SectionGrid data={filteredData} headers={headers} newAction={newAction} />,
        table: <SectionTable columns={{ name: { header: nameHeader || "Name" }, ...headers, action: { header: actionHeader || "Action" } }} data={filteredData.map(item => {
            return {
                name: <>{item.name} {item.editAction && <button onClick={item.editAction}>
                    <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                </button>}</>, ...item.records, action: <button
                    className="font-normal py-[14px] flex justify-center mx-auto text-[14px] lg:text-[16px]"
                    onClick={item.actionButton.action}>
                    <p className={item.actionButton.color === 'green' ? 'gradient-text' : item.actionButton.color === 'red' ? 'text-red-600' : ''}>{item.actionButton.text}</p>
                </button>
            }
        })} />,
    };

    const { activeTab, content, clickTabHandler } = useTabFoundation<TabType>('grid', (tab) => views[tab]);

    return (
        <div className="mt-[10px] lg:mt-[20px] px-4 lg:px-0 pb-[300px] lg:pb-6 overflow-auto lg:pr-[20px] xl:pr-[120px]">
            <div className="flex flex-col md:flex-row lg:items-center justify-between gap-y-5 mb-[20px] lg:mb-[45px]">
                <div>{header}</div>
                <div className="flex items-center justify-start gap-x-4 xl:gap-x-8 pl-2 md:pl-0">
                    <p className="text-light-white text-[16px] block lg:hidden">
                        Filter
                    </p>
                    <button onClick={() => {
                        clickTabHandler("grid");
                    }} className="cursor-pointer">
                        <GridSVG color={activeTab === "grid" ? "#1EA707" : "#4C4C4C"} />
                    </button>
                    <button onClick={() => {
                        clickTabHandler("table");
                    }} className="cursor-pointer">
                        <ListSVG color={activeTab === "table" ? "#1EA707" : "#4C4C4C"} />
                    </button>
                    {filter && <div>
                        <div
                            className="flex lg:items-center px-[8px] py-[5px] lg:px-[15px] lg:py-[10px] custom-hotspot-search">
                            <FilterSVG />
                            <input
                                type="text"
                                className="custom-hotspot-search-input w-full"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(ev) => { console.log("changed"); setSearchTerm(ev.target.value) }} />
                        </div>
                    </div>}
                </div>
            </div>
            {content}
        </div>
    );
};

export default CardTableSection;
