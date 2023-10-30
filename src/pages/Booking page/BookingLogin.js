import React from "react";
import BookingEvent from "./BookingEvent";
import "./booking_login.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Advertisement from "../Advertisement/Advertisement";

const BookingLogin = () => {
  const [advertisement, setadvertisement] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setadvertisement(false);
    }, 3000);
  }, [advertisement]);
  return (
    <>
      {advertisement && <Advertisement />}

      <div className="container-fluid booking_login d-flex py-5 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <BookingEvent />
            </div>
            <div className="booking_login_details col-lg-5">
              <div className="booking_login_details_title">
                <div className="py-3 mx-3">
                  <div className="d-flex justify-content-between ">
                    <p>Court Price</p>
                    <p>INR 250.00</p>
                  </div>
                  <p className="px-5 mt-3">
                    Provide your details to proceed with booking
                  </p>
                </div>
                <div className="booking_login_details_input px-3 mt-3 ">
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="w-100 mb-4 py-2"
                  />
                  <input
                    type="text"
                    placeholder="Last Name*"
                    className="w-100  mb-4 py-2"
                  />
                  <input
                    type="text"
                    placeholder="Email*"
                    className="w-100  mb-4 py-2"
                  />
                  <div className="d-grid gap-2 py-4">
                    <Link to="/Booking/Payment">
                      {" "}
                      <button className="btn btn-primary fs-5" type="button">
                        Next
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingLogin;
