import React from "react";
import "./Offers.css";
import { OfferCards } from "../../components/OfferCards/OfferCards";


export const OffersForMe = () => {
  return (
    <>

      <div className="row">
        <hr />
        <div className="col-lg-4 col-md-6 ">
          <OfferCards />
        </div>
        <div className="col-lg-4 col-md-6">
          <OfferCards />
        </div>

        <div className="col-lg-4 col-md-6">
          <OfferCards />
        </div>
      </div>

    </>

  );
};
