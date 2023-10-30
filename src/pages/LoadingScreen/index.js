import React from "react";
import { BarLoader } from "react-spinners";
import "./index.css";
import logomain from "../../assets/images/logomain.png";

const LoadingScreen = () => {
    return <>
        <div className="container-fluid">
            <div className="loading-wrapper">
                <div className="navbar__logo d-flex align-items-center">
                    <div className="navbar__logo__img me-3">
                        <img src={logomain} alt="nav-logo" />
                    </div>
                    <h1 className="nav__logo__brand">PlayersVictory</h1>
                </div>
                <BarLoader
                    color="#03bed1"
                    cssOverride={{}}
                    speedMultiplier={1.5}
                    width={200}
                />
            </div>
        </div>
    </>;
};

export default LoadingScreen;