import React, { ReactNode } from 'react'
import SectionCard from './SectionCard'
import { DataType } from './CardTableSection';

interface SectionGridProps<T extends Record<string, ReactNode>> {
    headers: { [K in keyof T]: { header: string, colored?: boolean } };
    newAction?: { topText: ReactNode, bottomText: ReactNode, action: () => void };
    data: DataType<T>[];
}

const SectionGrid = <T extends Record<string, ReactNode>,>({ headers, data, newAction }: SectionGridProps<T>) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-[12px] md:gap-[24px] xl:gap-[36px] 3xl:gap-[47px]">
            {data.map((input, index) =>
                <SectionCard
                    key={index}
                    indicator={input.indicatior}
                    title={input.name}
                    editAction={input.editAction}
                    fields={Object.entries(input.records).map(([k, v]) => {
                        return {
                            name: (headers[k].header || k), value: v, colored: !!headers[k].colored
                        }
                    })}
                    button={{ text: input.actionButton.text, action: input.actionButton.action, colored: input.actionButton.color }} />)}
            {newAction && <button className="bg-[#202020] rounded-[24px] py-[20px] lg:py-[30px] relative" style={{
                // backgroundImage: "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e %3cdefs%3e %3clinearGradient id='gradient' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3e %3cstop offset='0%25' stopColor='%234afc2d' /%3e%3cstop offset='100%25' stopColor='%231ea707' /%3e%3c/linearGradient%3e %3c/defs%3e %3crect width='100%25' height='100%25' fill='none' rx='24' ry='24' stroke='url(%23gradient)' stroke-width='3' stroke-dasharray='10%2c 16' stroke-dashoffset='30' stroke-linecap='square'/%3e%3c/svg%3e\")"
                backgroundImage: "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e %3cdefs%3e %3clinearGradient id='gradient' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3e %3cstop offset='0%25' stop-color='%234AFC2D' /%3e %3cstop offset='100%25' stop-color='%231EA707' /%3e %3c/linearGradient%3e %3c/defs%3e %3crect width='100%25' height='100%25' fill='none' rx='24' ry='24' stroke='url(%23gradient)' stroke-width='1' stroke-dasharray='10%2c 16' stroke-dashoffset='30' stroke-linecap='square'/%3e %3c/svg%3e\")"
            }} onClick={newAction.action}>
                {newAction.topText}
                <div className="w-20 h-20 border-[3px] border-transparent rounded-full flex items-center justify-center mx-auto my-4" style={{ backgroundImage: "linear-gradient(to right, #202020, #202020), linear-gradient(133deg, #4afc2d 0%, #1ea707 100%)", backgroundOrigin: "border-box", backgroundClip: "content-box, border-box" }}><span className="text-5xl" >+</span></div>
                {newAction.bottomText}
            </button>}
        </div>
    )
}

export default SectionGrid
