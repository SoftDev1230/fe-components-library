import { Navigate } from "react-router-dom";
import { AuthContextInterface } from "./AuthContext";
import React from "react";


type RequireLoggedInProps = {
    isLoggedIn?: AuthContextInterface | 'loading';
    navigateLocation: string;
    children: React.ReactNode | ((loggedIn: AuthContextInterface) => React.ReactNode);
}
export const RequireLoggedIn: React.FC<RequireLoggedInProps> = ({ isLoggedIn, navigateLocation, children }) => {
    if (isLoggedIn === undefined) {
        return <Navigate to={navigateLocation} replace />;
    }
    if (isLoggedIn === 'loading') {
        return <>loading</>;
    } else {
        if (typeof children === 'function') return <>{children(isLoggedIn)}</>;
        return children
    }
};

type RequireNotLoggedInProps = {
    isLoggedIn?: AuthContextInterface | 'loading';
    navigateLocation: string;
    children: React.ReactNode;
}
export const RequireNotLoggedIn: React.FC<RequireNotLoggedInProps> = ({ isLoggedIn, navigateLocation, children }) => {
    if (isLoggedIn !== 'loading' && isLoggedIn !== undefined) {
        return <Navigate to={navigateLocation} replace />;
    }
    else return <>{children}</>;
};

type RequireAdminProps = {
    isLoggedIn: AuthContextInterface ;
    navigateLocation: string;
    children: React.ReactNode;
}
export const RequireAdmin: React.FC<RequireAdminProps> = ({ isLoggedIn, navigateLocation, children }) => {
    if (!isLoggedIn.isAdmin) {
        return <Navigate to={navigateLocation} replace />;
    }
    else return <>{children}</>;
};
