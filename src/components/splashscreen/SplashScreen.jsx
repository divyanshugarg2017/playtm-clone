import React from "react";
import "./splashScreen.css";
import logo from "../../assets/images/logo.png";

const SplashScreen = () => {
  return (
    <>
      <div className="splashscreen  container-fluid">
        <div className="splashscreen__logo d-flex justify-content-start align-items-center pt-5 ps-5">
          <div className="splashscreen__logo__img me-3">
            <img src={logo} alt="logo" />
          </div>
          <h1 className="splashscreen__title">PlayersVictory</h1>
        </div>
        <div className="splashscreen__content text-center">
          <h1 className="splashscreen__find">Find</h1>
          <h1 className="splashscreen__nearest text-uppercase">
            Nearest Sports turf
          </h1>
        </div>
      </div>
    </>
  );
};

export default SplashScreen;
