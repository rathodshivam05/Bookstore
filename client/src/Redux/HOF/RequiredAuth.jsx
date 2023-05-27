import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
const RequiredAuth = ({ children }) => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const { pathname } = useLocation();
    if (isAuth) {
        return children;
    } else {
        return <Navigate to="/" state={{ from: pathname }} replace />;
    }
};
export default RequiredAuth;