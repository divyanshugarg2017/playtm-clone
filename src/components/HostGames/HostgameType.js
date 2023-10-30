import React, { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { GiSoccerField } from "react-icons/gi";
import badminton from "../../assets/images/icons/badminton.png";
import "../../pages/HostGame/hostGame.css";
import football from "../../assets/images/icons/football 2.png";
import Volleyball from "../../assets/images/icons/volleyball 2.png";
import Rugby from "../../assets/images/icons/american-football 2.png";
import Badminton from "../../assets/images/icons/badminton 2.png";
import Cricket from "../../assets/images/icons/cricket 1.png";
import { Link } from "react-router-dom";
import Mobile from "../../pages/Mobile/Mobile";

const HostgameType = () => {
  const [active, setActive] = useState(0);

  const selectOne = () => {
    setActive(0);
  };
  const selectTwo = () => {
    setActive(1);
  };

  return (
    <>
      <div className="d-flex align-items-center">
        <input type="radio" checked={active === 0} onClick={selectOne} />
        <p className="ms-3">Host Upcoming Game</p>
      </div>
      <div className={active === 1 ? "div-opacity" : "div-nopacity"}>
        <div className="py-3 px-5">
          <div className="d-flex justify-content-between flex-lg-row flex-column-reverse ">
            <p className="card_titles mt-3">Play Arena sports paradise</p>

            <div className="d-flex mt-3">
              <button
                type="button"
                className="btn btn-info fw-bold shuffle me-3"
              >
                <img src={badminton} className="me-2" alt="..." />
                Badminton
              </button>
              <button type="button" className="btn btn-outline-success">
                Upcoming
              </button>
            </div>
          </div>
          <p className="mt-2">BTM 2nd stage, near kk supermarket.....</p>

          <div className="mt-1">
            <AiOutlineCalendar />{" "}
            <span className="mt-2">Sun ,10th Dec 07:30am </span>
          </div>

          <div className="mt-1">
            <GiSoccerField /> <span>Premium Hybrid court</span>
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
          <div className="text-lg-end mt-3">
            <a
              className="btn btn-primary"
              data-bs-toggle="modal"
              href="#exampleModalToggle"
              role="button"
            >
              Host
            </a>
          </div>
        </div>
      </div>

      <hr />

      <div className="card_body-host">
        <div className="host_match-type d-flex align-items-center">
          <input type="radio" checked={active === 1} onClick={selectTwo} />
          <p className="ms-3">Host New Game</p>
        </div>
        <div className={active === 0 ? "div-opacity" : "div-nopacity"}>
          <div className="py-3 px-5 ">
            <p className="fw-bold"> Select sport</p>

            <div className="row">
              <div className="datecard d-flex align-items-center mt-4 col-lg-3 me-3">
                <div className="sportscardleftimg2 p-2">
                  <img
                    src={football}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <h5 className="card-title me-4">Football</h5>
              </div>
              <div className="datecard d-flex align-items-center mt-4 col-lg-3 me-3">
                <div className="sportscardleftimg2 px-2 py-2">
                  <img
                    src={Volleyball}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <h5 className="card-title me-4">Volleyball</h5>
              </div>
              <div className="datecard d-flex align-items-center mt-4 col-lg-3 me-3">
                <div className="sportscardleftimg2 px-2 py-2">
                  <img
                    src={Rugby}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <h5 className="card-title me-4">Rugby</h5>
              </div>
              <div className="datecard d-flex align-items-center mt-4 col-lg-3 me-3">
                <div className="sportscardleftimg2 px-2 py-2">
                  <img
                    src={Badminton}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <h5 className="card-title me-4">Badminton</h5>
              </div>
              <div className="datecard d-flex align-items-center mt-4 col-lg-3 me-3">
                <div className="sportscardleftimg2 px-2 py-2">
                  <img
                    src={Cricket}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <h5 className="card-title me-4">Cricket</h5>
              </div>
            </div>
          </div>

          <div className="text-lg-end mt-5 ">
            <Link to="/Profile/MeetPayPals/Hostgame/GameDetails">
              {" "}
              <button type="button" className="btn btn-primary px-5 mb-3 ">
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HostgameType;
