import React, { useState } from "react";
import eventscenter from "../../assets/images/eventscenter.png";
import "./events.css";
import { FaSearch } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import FindSports from "../Find Sports/FindSports";
import { Cards } from "../../components/CardsSportsAround/Cards";
import { fetchByKeyword } from "../../redux/actions/search.actions";

const Events = () => {

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-2 col-12">
            <div>Selected Location</div>
            <div className="fw-bold">
              BTM layout
              <RiArrowDropDownLine className="fs-4" />
            </div>
          </div>
          <div className="col-lg-8 col-12 my-lg-0 my-3">
            <div className="position-relative">
              <FaSearch className="search__icon" />
              <input
                className="form-control-search"
                type="text"
                placeholder="Search for clubs events..."
                aria-label="Search"
                onChange={(event) => setSearchKeyword(event.target.value)}
              />
            </div>
          </div>
          <div className="col-lg-2 col-12  ">
            <div className="filter-container w-100 h-100  border rounded-3 d-flex justify-content-center align-items-center">
              <FiFilter className="me-2" />
              <span>Filter by sports</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0 d-flex mt-5">
        <div className="container">
          <div className="col-lg-12">
            {" "}
            <div className="card">
              <img src={eventscenter} className="card-img" alt="..." />
              <div className="card-img-overlay ">
                <div className="bg_content ms-lg-5 mt-lg-5 mt-4">
                  <div className="card_title_parent d-flex align-items-center justify-content-between">
                    <h5 className="card-title">PLAY ARENA</h5>
                    <div className="vr mx-4 vr-bold"></div>
                    <h4 className="card-title titleshuttle">
                      Shuttle Tournament
                    </h4>
                  </div>
                  <p
                    className="fs-5 my-lg-5 my-3"
                    style={{ color: "#FFDF17", width: "120px" }}
                  >
                    {" "}
                    December 7th & 8th{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row py-3">
          <div className="d-flex justify-content-between align-items-center sports___home">
            <h3 className="my-3">Clubs around you</h3>
            <Link to="SportsAround ">
              {" "}
              <p className="fw-bold"> View All</p>
            </Link>
          </div>

          <div className="col-lg-3">
            <Cards />
          </div>
          <div className="col-lg-3">
            <Cards />
          </div>
          <div className="col-lg-3">
            <Cards />
          </div>
          <div className="col-lg-3">
            <Cards />
          </div>

          {/* <div className="d-flex justify-content-between align-items-center sports___home">
            <h3 className="my-3">Events around you</h3>
            <Link to="EventsAround ">
              {" "}
              <p className="fw-bold view"> View All</p>
            </Link>
          </div>
          <div className="col-lg-3">
            <EventsCard />
          </div>
          <div className="col-lg-3">
            <EventsCard />
          </div>
          <div className="col-lg-3">
            <EventsCard />
          </div>
          <div className="col-lg-3">
            <EventsCard />
          </div> */}
        </div>
      </div>

      {/* <FindSports /> */}
    </>
  );
};

export default Events;
