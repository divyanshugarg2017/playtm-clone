import React from "react";
import player1 from "../../assets/images/player1.png";
import "./mobile.css";

const Mobile = ({ title, placeholder, input, length }) => {
  return (
    <>
      <div className="mobile_card">
        <div className="row">
          <div className="col-lg-5 mobile d-flex justify-content-center align-items-center p-0 ">
            <div className="mobile_img ">
              <img src={player1} alt="..." />
            </div>
          </div>
          <div className="col-lg-7 border p-0">
            <div className="mobile_form d-flex justify-content-center align-items-center flex-column ">
              <div>
                <h5 className="fs-4 ">{title}</h5>
              </div>
              <div className="mt-5 d-grid col-10 mx-auto mobile_input">
                <input type={input} placeholder={placeholder} maxLength={length}></input>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile;
