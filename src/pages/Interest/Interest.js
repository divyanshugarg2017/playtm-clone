import React from "react";
import player1 from "../../assets/images/player1.png";
import "./interest.css";
import SportsIcon from "./SportsIcon";

const Interest = () => {
  return (
    <>
      <div className="container  my-3 player_card ">
        <div className="row">
          <div className="col-lg-4 player d-flex justify-content-center align-items-center p-0 ">
            <div className="player_img">
              <img src={player1} alt="..." />
            </div>
          </div>
          <div className="col-lg-8 p-0 border">
            <div>
              <h5 className="mt-3 fw-bold fs-3 text-center">
                Select Interests
              </h5>
            </div>

            <div
              className="accordion p-3 w-100"
              id="accordionPanelsStayOpenExample"
            >
              <div className="accordion-item ">
                <h2
                  className="accordion-header "
                  id="panelsStayOpen-headingOne"
                >
                  <button
                    className="accordion-button fs-4"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Team Sports
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body">
                    <SportsIcon />
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    className="accordion-button collapsed fs-4"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    Racquet Sports
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div className="accordion-body">
                    <SportsIcon />
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingThree"
                >
                  <button
                    className="accordion-button collapsed fs-4"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    Fitness
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div className="accordion-body">
                    <SportsIcon />
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingFour"
                >
                  <button
                    className="accordion-button collapsed fs-4"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                    Recreation
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFour"
                >
                  <div className="accordion-body">
                    <SportsIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="submit_btn m-3 p-3 d-grid col-4 ">
              <button type="button" className="btn btn-primary btn-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interest;
