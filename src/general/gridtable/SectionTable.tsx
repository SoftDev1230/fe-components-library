import React, { ReactNode } from 'react'
import "./SectionTable.css";

interface SectionListProps<T extends Record<string, ReactNode>> {
    columns: { [K in keyof T]: { header: ReactNode, colored?: boolean } };
    data: T[];
}

const SectionTable = <T extends Record<string, ReactNode>>({ columns, data }: SectionListProps<T>) => {
    return (
        <div className="hotspot-list-table table-container">
            <table className="w-full border-separate border-spacing-y-2">
                <thead>
                    <tr>
                        {Object.entries(columns).map((column, index) => <th className="text-[14px] lg:text-[16px]" key={index}>{column[1].header}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {Object.entries(columns).map((column, colIndex) => (
                                <td className={`text-[14px] lg:text-[16px] font-medium ${column[1].colored ? "gradient-text" : "text-white"}`} key={colIndex}>
                                    {row[column[0]]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SectionTable
