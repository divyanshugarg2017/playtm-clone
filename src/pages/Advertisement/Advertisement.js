import React from "react";
import advertisement from "../../assets/images/advertisement.png";
import "./advertisement.css";

const Advertisement = () => {
  return (
    <>
      <div className="container  advertisement">
        <div className="row">
          <div className="col-lg-6 mobile d-flex justify-content-center align-items-center p-0 ">
            <div className="mobile_img ">
              <img src={advertisement} alt="..." />
            </div>
          </div>
          <div className="col-lg-6 border p-0">
            <div className="h2 m-2 p-2">Want to play games ?</div>
            <div className="h2 mx-3 "> But don't get a opponent team ?</div>
            <div className="m-2 p-2 fs-4 mb-5">
              <p>You can Invite Players</p>
            </div>
            <div className="advertisement_btns d-flex mb-3 justify-content-end mx-5 ">
              <button
                type="button"
                className="btn px-5 ignore_btn mx-3"
                style={{ color: "#0085FF" }}
              >
                Ignore
              </button>
              <button type="button" className="btn btn-primary px-5">
                Invite
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advertisement;
