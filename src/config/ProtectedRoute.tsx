import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({shouldNavigate, navigateLocation}: {
    shouldNavigate: boolean,
    navigateLocation: string
}) => {
    if (shouldNavigate) return <Navigate to={navigateLocation} replace/>;
    else return <Outlet/>;
};

export default ProtectedRoutes
