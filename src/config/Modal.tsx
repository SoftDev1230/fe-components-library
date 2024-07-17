import React, { createContext, useContext, useState, ReactNode, FC } from 'react';

export interface ModalContextProps {
    showModal: (content: ReactNode, onClose?: () => void) => void;
    hideModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useModal = (): ModalContextProps => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};

type ModalContent = {
    content: ReactNode;
    onClose?: () => void;
} | undefined;

export const ModalProvider = (props: { children: any }) => {
    const [modalContent, setModalContent] = useState<ModalContent>(undefined);

    const showModal = (content: ReactNode, onClose?: () => void) => {
        setModalContent({ content, onClose });
    };

    const hideModal = () => {
        if (modalContent?.onClose)
            modalContent.onClose();
        setModalContent(undefined);
    };

    return (
        <ModalContext.Provider value={{ showModal, hideModal }}>
            {props.children}
            {modalContent && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
                    <div className="relative rounded-[29px] bg-[#1b1b1b] border border-[#4E4E4E] border-opacity-35">
                        <CloseButton hideModal={hideModal} />
                        <div className="overflow-y-auto max-h-[90vh] px-3 lg:px-10 xl-px-[50px] pt-6 pb-6 lg:pt-12 lg:pb-[25px]">
                            {modalContent.content}
                        </div>
                    </div>
                </div>
            )}
        </ModalContext.Provider>
    );
};

const CloseButton = (props: { hideModal: () => void }) =>
    <button className="absolute right-4 top-4 cursor-pointer" onClick={() => props.hideModal()}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none">
            <path
                d="M14.5909 14.1153L7.5332 7.05762"
                stroke="white"
                strokeWidth="1.76442"
                strokeLinecap="round"
                strokeLinejoin="round" />
            <path
                d="M14.5909 7.05762L7.5332 14.1153"
                stroke="white"
                strokeWidth="1.76442"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
    </button>
