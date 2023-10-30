import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import "../../pages/HostGame/hostGame.css";
import team from "../../assets/images/icons/team.png";
import plus from "../../assets/images/icons/plus.png";
import DateCard from "./DateCard";
import { Link } from "react-router-dom";
import Mobile from "../../pages/Mobile/Mobile";

const HostTeam = () => {
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
          <Link to="/Profile/MeetPayPals/Hostgame/GameDetails">
            {" "}
            <span className="top-txt">Host Game</span>
          </Link>
        </div>

        <div className="container  bg-white rounded-3 p-lg-5 ">
          <p className="pt-3">Hire a Umpire</p>
          <div className="d-flex mt-3">
            {" "}
            <DateCard date="Yes" /> <DateCard date="No" />
          </div>
          <p className="mt-5">Team</p>
          <div className="d-flex align-items-center">
            <div className="teambtn me-4">
              <img src={team} alt="..." className="me-3" />
              <span>Team simba</span>
            </div>
            <Link to="/Profile/MeetPayPals/Hostgame/TeamDetails/CreateyourTeam">
              <div className="teambtn">
                <img src={plus} alt="plus" className="me-3 " />
                <span style={{ color: "#0085FF" }}> Create new team </span>
              </div>
            </Link>
          </div>
          <div
            className="modal fade"
            id="exampleModalToggle"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-lg modal-sm modal-md modal-dialog-centered ">
              <div className="modal-content ">
                <Mobile
                  title="Enter Your Mobile Number"
                  placeholder="+91 9999999999"
                  btn_text="Get OTP"
                  input="number"
                />

                <button
                  className="btn btn-primary my-3 w-25 mx-auto"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                >
                  Get OTP
                </button>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModalToggle2"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel2"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered ">
              <div className="modal-content ">
                <Mobile
                  title="Enter OTP"
                  btn_text="Proceed"
                  input="password"
                  length="6"
                />

                <Link to="/Booking" className="mx-auto  my-3">
                  <button
                    className="btn btn-primary  px-5 w-100"
                    data-bs-target="#exampleModalToggle2"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                  >
                    Proceed
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-lg-end">
            <a
              className="btn btn-primary mx-3"
              data-bs-toggle="modal"
              href="#exampleModalToggle"
              role="button"
            >
              Host
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HostTeam;
