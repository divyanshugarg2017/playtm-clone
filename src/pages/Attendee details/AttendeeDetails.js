import React from "react";
import "./attendee_details.css";
import { Link } from "react-router-dom";

const AttendeeDetails = () => {
  return (
    <>
      <div className="container-fluid attendee_details  mb-5 d-flex py-5 ">
        <div className="container attendee_details_bg_w">
          <div className="row">
            <div className="col-lg-12">
              <p className="mb-4 mt-4 mx-3 fw-bold">Attendee Details</p>
              <div className="mx-3 mb-5">
                <input
                  type="text"
                  className="py-2  ps-3 pe-5 mx-4 mt-3 attendee_details_input"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="py-2  ps-3 pe-5 mx-4 mt-3 attendee_details_input"
                  placeholder="Email ID"
                />
                <input
                  type="number"
                  className="py-2  ps-3 pe-5 mx-4 mt-3 attendee_details_input"
                  placeholder="Mobile Number"
                  onwheel="return false;"
                />
              </div>
              <p className="mb-4 mt-4 mx-3 fw-bold">Partner Details</p>

              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Add Manually
                  </button>
                </li>
              </ul>
              <div className="tab-content bg_white________" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="mt-4 mb-4 mx-3 d-flex flex-wrap align-items-center ">
                    <span className="fw-bold mx-2">1</span>
                    <input
                      type="text"
                      className="py-2  ps-3 pe-5 mx-4 attendee_details_input my-lg-0 my-2"
                      placeholder="Name"
                    />
                    <input
                      type="number"
                      className="py-2  ps-3 pe-5 mx-4 attendee_details_input"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div className="mt-4 mb-4 mx-3 d-flex flex-wrap align-items-center">
                    <span className="fw-bold mx-2">2</span>
                    <input
                      type="text"
                      className="py-2  ps-3 pe-5 mx-4 attendee_details_input my-lg-0 my-2"
                      placeholder="Name"
                    />
                    <input
                      type="number"
                      className="py-2  ps-3 pe-5 mx-4 attendee_details_input"
                      placeholder="Mobile Number"
                    />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="mt-4 mb-4 mx-3 d-flex flex-wrap align-items-center">
                    <span className="fw-bold mx-2">1</span>
                    <input
                      type="text"
                      className="py-2  ps-3 pe-5 mx-4 attendee_details_input my-lg-0 my-2"
                      placeholder="Name"
                    />
                    <input
                      type="number"
                      className="py-2  ps-3 pe-5 mx-4  attendee_details_input"
                      placeholder="Mobile Number"
                    />
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-end mb-5 mx-5 attendee_details_btn">
                <Link to="/Booking">
                  {" "}
                  <button
                    type="button"
                    className="btn btn-primary btn-sm py-2 px-5"
                  >
                    Create
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttendeeDetails;
