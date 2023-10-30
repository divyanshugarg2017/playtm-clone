import React, { useEffect, useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import "./Offers.css";
import { OffersForMe } from "./OffersForMe";
import { OffersAroundMe } from "./OffersAroundMe";
import { Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";

export const Offers = () => {
  // const [offers,setOffers] = useState();

  // useEffect(()=>{
  //   const { data } = axiosInstance.get(`/club/api/v1/couponViewById`)
  // },[]);
  return (
    <>
      <div className="container-fluid bg__profile__o py-5">
        <div className="container mb-3">
          <Link to="/">
            {" "}
            <span className="top-txt">Home</span>
          </Link>
          <FaGreaterThan />
          <Link to="/">
            {" "}
            <span className="top-txt">Profile</span>
          </Link>
          <FaGreaterThan />
          <span className="top-txt">Offers</span>
        </div>

        <div className="container  bg-white rounded-3 p-lg-5 ">
          <Tabs
            defaultActiveKey="offersforme"
            id="uncontrolled-tab-example"
            className="tabs-container"
          >
            <Tab
              eventKey="offersforme"
              title="Offers for me"
              className="tab-body-content"
            >
              <OffersForMe />
            </Tab>

            <Tab
              eventKey="offersaroundme"
              title="Offers Around Me"
              className="tab-body-content"
            >
              <OffersAroundMe />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};
