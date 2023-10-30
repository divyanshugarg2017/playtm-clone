import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import { Tabs, Tab } from "react-bootstrap";
import MyMatches from "./MyMatches";
import "./meetpaypals.css";
import MatchesAround from "../MatchesAroundme/MatchesAround";
import chat from "../../assets/images/chat2.png";
import { Link } from "react-router-dom";

const Meetpaypals = () => {
  return (
    <>
      <div className="container-fluid bg__profile__o py-5 ">
        <div className="container mb-3">
          <Link to="/">
            {" "}
            <span className="top-txt">Home</span>{" "}
          </Link>
          <FaGreaterThan />
          <Link to="/">
            {" "}
            <span className="top-txt">Profile</span>{" "}
          </Link>
          <FaGreaterThan />
          <span className="top-txt">Meet Paypals</span>
          <div className="container  bg-white rounded-3 p-lg-5 mt-3 ">
            <div className=" position-relative tabs___container">
              <div className="d-flex align-items-center position-absolute end-0 me-4 host__btn">
                <Link to="/Profile/MeetPayPals/Chats">
                  {" "}
                  <div className="me-4">
                    <img src={chat} alt="..." />
                  </div>
                </Link>
                <Link to="/Profile/MeetPayPals/HostGame">
                  <button className="host_btn">Host game</button>{" "}
                </Link>
              </div>

              <div className="main__meetpay">
                <Tabs
                  defaultActiveKey="mymatches"
                  id="uncontrolled-tab-example"
                  className="tabs-container"
                >
                  <Tab
                    eventKey="mymatches"
                    title="My Matches"
                    className="tab-body-content"
                  >
                    <MyMatches />
                  </Tab>
                  <Tab
                    eventKey="matchesaroundme"
                    title="Matches Around Me"
                    className="tab-body-content"
                  >
                    <MatchesAround />
                  </Tab>
                </Tabs>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meetpaypals;
