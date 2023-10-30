import React from "react";
import { Link } from "react-router-dom";
import "./eventcards.css";

const Eventcards = () => {
  return (
    <>
      <Link to="AttendeeDetails">      <div className="card eventcard my-3">
        <div className="card-header eventcard_header">Under 20 Boys</div>
        <div className="card-body">
          <p className="card-text">Type : Knockout</p>
          <p className="card-text my-3">
            Fee : <span className="text-primary">$600</span>
          </p>
          <p className="text-danger">Only 2 slots left</p>
        </div>
      </div>
      </Link>

    </>
  );
};

export default Eventcards;
