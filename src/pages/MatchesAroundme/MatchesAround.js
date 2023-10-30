import React from "react";
import "./matchesAround.css";

import { FaSearch } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import MatchCard from "../../components/MatchesAroundCard/MatchCard";
import { Row } from "react-bootstrap";
const MatchesAround = () => {
  return (
    <div className="container py-5">
      <hr />
      <div className="search-options">
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
        <div className="row">
          <div className="col-lg-4">  <MatchCard /></div>
          <div className="col-lg-4">  <MatchCard /></div>
          <div className="col-lg-4">  <MatchCard /></div>
        </div>
      </div>
    </div>
  );
};

export default MatchesAround;
