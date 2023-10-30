import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoadingScreen from "../../pages/LoadingScreen";

const AuthenticatedRoute = ({element,location}) => {
    const session = useSelector((state) => state.session);
    const isAuthenticated = session.isAuthenticated !== null && session.isAuthenticated ? true : false;
    const isAuthChecking = session.isCheckingAuth ? true : false;

    return (
        isAuthChecking ? <LoadingScreen />
            : isAuthenticated ? element
                : <Navigate
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                />
    );
};

export default AuthenticatedRoute;