import React from "react";
import "./Chats.css";
import { FaGreaterThan } from "react-icons/fa";
import ChatUsers from "./ChatUsers";
import ChatMessages from "./ChatMessages";
import { Link } from "react-router-dom";

const Chats = () => {
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
          <span className="top-txt">Chats</span>
        </div>

        <div className="container  bg-white rounded-3 p-lg-5 ">
          <div className="chat-container">
            <ChatUsers />
            <ChatMessages />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chats;
