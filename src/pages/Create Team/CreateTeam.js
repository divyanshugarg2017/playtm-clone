import React from "react";
import "./create_team.css";
import profile_logo from "../../assets/images/profile_logo.jpg";
import { Link } from "react-router-dom";

const CreateTeam = () => {
  return (
    <>
      <div className="container-fluid create_team mb-5 d-flex mt-2 ">
        <div className="container create_team_bg_w">
          <div className="row">
            <div>
              <p className="mb-4 mt-4 mx-3 fw-bold">Create Your Team</p>
              <div className="mx-3 mb-5 d-flex align-items-center team_logo ">
                <div className="team_logo_img_div">
                  <img src={profile_logo} alt="..." />
                  <p className="team_logo_title ">Team Logo</p>
                  <span
                    className="add_btn d-flex align-items-center justify-content-center"
                    style={{ color: "#fff" }}
                  >
                    +
                  </span>
                </div>

                <input
                  type="text"
                  className="py-2  ps-3 pe-5 mx-lg-4 team_logo_input "
                  placeholder="Team Name"
                />
              </div>

              <p className="mb-4 mt-4 mx-3 fw-bold">Team Skill</p>
              <div className="mx-3 d-flex">
                <div className="col-md-6 ">
                  <button
                    type="button"
                    className="btn   mt-3 px-4 py-2 skill datecard"
                  >
                    Beginner
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-dark  mt-3 px-4 py-2 skill datecard"
                  >
                    Amateur
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-dark  mt-3 px-4 py-2 skill datecard"
                  >
                    Intermediate
                  </button>
                </div>
                <div className="col-md-6">
                  <button
                    type="button"
                    className="btn btn-outline-dark mt-3  px-4 py-2 skill datecard"
                  >
                    Advanced
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-dark  mt-3 px-4 py-2 skill datecard"
                  >
                    Professional
                  </button>
                </div>
              </div>

              <p className="mb-4 mt-4 mx-3 fw-bold">Team Strength</p>
              <input
                type="text"
                className="py-2  ps-3 pe-5 mx-4 mb-5"
                placeholder="Eg: 12"
                maxLength="2"
              />
              <div className="d-flex justify-content-end mb-5 mx-5">
                <Link to="/Profile/MeetPayPals/Hostgame/TeamDetails">
                  {" "}
                  <button
                    type="button"
                    className="btn btn-primary btn-sm py-2 px-5"
                  >
                    Next
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

export default CreateTeam;
