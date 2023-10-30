import React from "react";
import "./cards.css";
import badminton from "../../assets/images/icons/badminton.png";
import football from "../../assets/images/icons/football.png";
import ph_football from "../../assets/images/icons/ph_football.png";
import volleyball from "../../assets/images/icons/volleyball.png";
import star from "../../assets/images/icons/star.png";
import banner1 from "../../assets/images/banner1.png";
import { Link } from 'react-router-dom'

export const Cards = ({club}) => {
  return (
    <>
      <Link to={`/club/${club.clubId}`}>
        <div className="card mt-3 sportsaroundcard">
          <img src={banner1} className="card-img-top img-fluid" alt="..." />
          {/* <div className="two_km_imgdiv">
            <p className="card-text two_km">2.0 km</p>
          </div> */}
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div> <h5 className="card-title">{club.customerClubName}</h5></div>
              <div className="d-flex justify-content-between align-items-center">
                <button type="button" className="btn btn-primary btnrating">4.6
                  <img src={star} className=" ms-2" alt="123" /></button>
              </div>
            </div>

            <p className="card-text mt-3">{club.clubAddress}</p>
            <div className="card_icon mt-2">
              <img src={badminton} className="game-icon" alt="123" />
              <img src={football} className="game-icon" alt="123" />
              <img src={ph_football} className="game-icon" alt="123" />
              <img src={volleyball} className="game-icon" alt="123" />
            </div>
          </div>
        </div>
      </Link>


    </>









  );




};
