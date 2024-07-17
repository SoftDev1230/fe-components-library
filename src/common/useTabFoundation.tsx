import { ReactNode, useEffect, useState } from "react";

const useTabFoundation = <T,>(
    initial: T,
    views: (tab: T) => ReactNode) => {
        
    const [activeTab, setActiveTab] = useState<T>(initial);
    const [content, setContent] = useState<ReactNode>(views(initial));

    const clickTabHandler = (selector: T) => {
        setActiveTab(selector); 
        setContent(views(selector));
    };
   

    return { activeTab, content, clickTabHandler }
}

export default useTabFoundation;
