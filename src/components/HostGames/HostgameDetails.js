import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import "../../pages/HostGame/hostGame.css";
import { BiCurrentLocation } from "react-icons/bi";
import DateCard from "./DateCard";
import { Link } from "react-router-dom";

const HostgameDetails = () => {
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
          <Link to="/Profile/MeetPayPals/Hostgame">
            {" "}
            <span className="top-txt">Host Game</span>
          </Link>
        </div>

        <div className="container  bg-white rounded-3 p-lg-5 ">
          <p className="fw-bold ">Game Type</p>
          <div className="d-flex mt-3">
            <DateCard date="Battle" />
            <DateCard date="Friendly Match" />
          </div>

          <div className="row">
            <div className="col-lg-6">
              {" "}
              <p className="fw-bold mt-3 ms-2">Location</p>
              <div className="locateicondiv">
                {" "}
                <input
                  placeholder="Mention your location "
                  className=" input3 mt-3 w-100"
                ></input>
                <div className="locateicon">
                  {" "}
                  <BiCurrentLocation />
                </div>{" "}
              </div>
            </div>

            <div className="col-lg-6 ">
              {" "}
              <p className="fw-bold mt-3 ms-2">Ground</p>
              <input
                placeholder="Mention your prefferd ground "
                className="input3 mt-3 w-100"
              ></input>
            </div>
          </div>

          <h5 className="mb-3 ms-2 fw-bold mt-3">Date</h5>
          <div className="d-flex datecardmobile mb-3">
            <DateCard day="Today" date="06, Nov" />
            <DateCard day="Tomorrow" date="07, Nov" />
            <DateCard day="Mon" date="08, Nov" />
            <DateCard day="Tue" date="09, Nov" />
            <DateCard day="Wed" date="10, Nov" />
            <DateCard day="Thu" date="11, Nov" />
          </div>
          <hr />

          <h5 className="mb-3 ms-2 fw-bold">Time</h5>

          <div className="d-flex datecardmobile mb-3">
            <DateCard date="6 - 7:00am" />
            <DateCard date="7 - 8:00am" />
            <DateCard date="8 - 9:00am" />
            <DateCard date="9 - 10:00am" />
            <DateCard date="10 - 11:00am" />
            <DateCard date="11 - 12:00pm" />
          </div>
          <div className="text-lg-end mt-3">
            <Link to="/Profile/MeetPayPals/Hostgame/TeamDetails">
              {" "}
              <button type="button" className="btn btn-primary px-5 ">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HostgameDetails;
