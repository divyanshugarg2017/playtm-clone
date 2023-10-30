import React from "react";
import background from '../../assets/images/background.png'
import over from '../../assets/images/over.png'

export const OfferCards = () => {
  return (
    <div className="mt-3 mb-3 ">
      <div className="offer_img">   <img src={background} alt="..." className="img-fluid" />

        <div className="offer_overlay">  <img src={over} alt="..." /></div>
        <div className="overlay">
          <p className="overlay_txt ms-2 w-100">PLAY ARENA</p>
          <p className="overlay_smtxt ms-2 mt-2">Flat 50%</p>
        </div>
        <div className="overlay_badge overlay_badge_offers">
          <p className="overlay_badge_txt"> Claim now </p>
        </div>
      </div></div>


  );
};
