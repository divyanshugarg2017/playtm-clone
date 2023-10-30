import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import "./hostGame.css";
import HostgameType from "../../components/HostGames/HostgameType";
import { Link } from "react-router-dom";

const Hostgame = () => {
  return (
    <>
      <div className="container-fluid bg__profile__o py-5">
        <div className="container mb-3">
          <Link to="/">
            {" "}
            <span className="top-txt">Home</span>
          </Link>
          <FaGreaterThan />
          <Link to="/">
            {" "}
            <span className="top-txt">Profile</span>
          </Link>
          <FaGreaterThan />
          <Link to="/Profile/MeetPayPals">
            {" "}
            <span className="top-txt">Meet Paypals</span>
          </Link>
          <FaGreaterThan />
          <span className="top-txt">Host Game</span>
        </div>

        <div className="container  bg-white rounded-3 p-lg-5 ">
          <HostgameType />
        </div>
      </div>
    </>
  );
};

export default Hostgame;
