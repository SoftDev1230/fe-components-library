import React, { ReactNode } from 'react';

/**
 * Wrapper component to provide the correct margins around the main content.
 * This ensures the content is not right up against the sidebar and not underneath
 * the floating header. This wrapper is needed for almost every page except the
 * landing page. Implemented in the Layout.
 */
const MainContainer = ({ children }: { children: ReactNode }) => {
    return (
        <div className="mt-[100px] lg:mt-[150px] lg:ml-[1%] xl:ml-[1%] ">
            {children}
        </div>
    );
};

export default MainContainer;
