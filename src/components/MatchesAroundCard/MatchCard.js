import React from "react";
import "./matchcard.css";
import { Card } from "react-bootstrap";
import badminton from "../../assets/images/icons/badminton.png";
import user from "../../assets/images/mdi_account.png";
import cover from "../../assets/images/icons/Vector.png";
import team from "../../assets/images/icons/Layer 2.png";
import account from "../../assets/images/icons/accounts.png";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

const MatchCard = () => {
  return (
    <>
      <Card className="card-match mt-3">
        <Card.Body>
          <div className="card-match-top d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-info fw-bold shuffle me-3"
            >
              <img src={badminton} className="me-2" alt="..." />
              Badminton
            </button>
            <div className="card-tag-user">
              <img src={user} alt="user" />
              <span className="user-txt">By Akshay</span>
            </div>
          </div>
          <div className="match-body">
            <div className="match-tag">



              <div className="d-flex justify-content-between align-items-center">

                <div className="position-relative mt-3">  <img src={cover} alt="cover" />

                  <div className="position-absolute shield_logo"> <img src={team} alt="..." />  </div>
                  <p className="team1 mt-3">Strikers</p>

                </div>

                <p className="verses">V/S</p>

                <div className="position-relative mt-3">  <img src={cover} alt="cover" />
                  <div className="position-absolute shield_logo"> <img src={account} alt="..." />  </div>
                  <p className="team1 mt-3">Waiting</p>

                </div>
              </div>

              <hr />
              <div className="card-match-footer d-flex  justify-content-between align-items-center">
                <div> <AiOutlineCalendar />
                  <span className="footer_text">Sun ,10th Dec 07:30am </span>
                  <br />
                  <HiLocationMarker />
                  <span className="footer_text">Play Arena ,BTM 2nd stage</span></div>
                <div className="text-end">  <button type="button" className="btn btn-primary">Join</button></div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card >
    </>
  );
};

export default MatchCard;
