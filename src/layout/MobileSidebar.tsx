import React, {useState} from 'react'

const MobileSidebar = ({name, children}: any) => {
    const loggedIn = true
    const [expanded, setExpanded] = useState(false);

    if (loggedIn) return (
        <div
            className={`absolute bottom-[87px] left-0 block lg:hidden w-full mobile-sidebar-bg ${expanded ? 'expand-height overflow-auto' : 'contract-height'}`}>
            <div className="px-6 mb-[30px] sidebar-mobile-rinex pt-[12px] lg:pt-0">
                <div className="flex justify-center mb-2.5 lg:hidden">
                    {expanded ? (
                        <div onClick={() => setExpanded(false)}>
                            <svg
                                width="53"
                                height="13"
                                viewBox="0 0 53 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="rotate-180">
                                <path
                                    d="M27 2.99997L51 11"
                                    stroke="#C8C8C8"
                                    strokeWidth="4"
                                    strokeLinecap="round"/>
                                <path
                                    d="M2 11L26 2.99997"
                                    stroke="#C8C8C8"
                                    strokeWidth="4"
                                    strokeLinecap="round"/>
                                <path
                                    d="M26.4662 2.87521L23.6863 3.7836"
                                    stroke="#C8C8C8"
                                    strokeWidth="4"
                                    strokeLinecap="round"/>
                            </svg>
                        </div>
                    ) : (
                        <div onClick={() => setExpanded(true)}>
                            <svg
                                width="53"
                                height="13"
                                viewBox="0 0 53 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M27 2.99997L51 11"
                                    stroke="#C8C8C8"
                                    strokeWidth="4"
                                    strokeLinecap="round"/>
                                <path
                                    d="M2 11L26 2.99997"
                                    stroke="#C8C8C8"
                                    strokeWidth="4"
                                    strokeLinecap="round"/>
                                <path
                                    d="M26.4662 2.87521L23.6863 3.7836"
                                    stroke="#C8C8C8"
                                    strokeWidth="4"
                                    strokeLinecap="round"/>
                            </svg>
                        </div>
                    )}
                </div>
                {name &&
                    <p className="text-light-white text-[15px] mb-1.5 text-center block lg:hidden">  {name}</p>}
                {children}
            </div>
        </div>
    )
}

export default MobileSidebar
