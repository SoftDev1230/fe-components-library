import React, { ReactNode } from 'react'
import { HexColor } from '../../utils/types';
import { IndicatorSVG } from './SVGs';
import { json } from 'react-router-dom';

interface SectionCardProps {
    indicator?: HexColor;
    title: string;
    editAction?: () => void,
    fields: { name: string, value: ReactNode, colored: boolean }[]
    button: { text: string, action: () => void, colored?: "green" | "red" }
}

const SectionCard = ({ indicator, title, editAction, fields, button }: SectionCardProps) => {
    console.log(fields, title, button);
    const className = button.colored === 'green' ? 'gradient-text' : button.colored === 'red' ? 'text-red-600' : '';
    return (
        <div>
            <div className="hotspot-custom-grid pt-[20px] lg:pt-[30px] relative mins-h-[500px]">
                {indicator && <div className="absolute left-[27px] top-[15px]"><IndicatorSVG color={indicator} /></div>}

                <div className="px-[20px] xl:px-[30px]">
                    <p className="text-[16px] lg:text-[20px] font-medium text-center">
                        {title} {editAction && <button onClick={editAction} className='lg:ml[24px] xl:ml-[36px]'>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.523 0.218095C10.335 0.0301662 10.0304 0.0301662 9.84243 0.218095L0.0770416 9.98348V14.0326C0.0770416 14.2984 0.292492 14.5138 0.558264 14.5138H4.60737L14.3728 4.74842C14.5607 4.56049 14.5607 4.2558 14.3728 4.06787L10.523 0.218095Z" fill="white"/>
                            </svg>
                            {/* <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg> */}
                        </button>}
                    </p>
                    {fields.map((field, index) => <div key={index} className="flex items-center justify-between grid-item-text py-[14px] gap-4">
                        <p className="text-[12px] lg:text-[14px] text-lightest-white font-normal">
                            {field.name}
                        </p>
                        <p className={`text-[14px] lg:text-[16px] font-medium break-words break-all capitalize${field.colored && " gradient-text"}`}>
                            {field.value}
                        </p>
                    </div>)}
                </div>
                <div className="custom-base-action">
                    <button
                        className="font-normal py-[14px] flex justify-center mx-auto text-[14px] lg:text-[16px]"
                        onClick={button.action}>
                        <p className={className}>{button.text}</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SectionCard
