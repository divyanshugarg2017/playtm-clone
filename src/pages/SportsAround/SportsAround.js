import React, { useEffect } from "react";
import "./sportsaround.css";
import { FaSearch } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Cards2 } from "../../components/CardsClubAround/Cards2";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllClubs } from "../../redux/actions/clubs.actions";
import { Cards } from "../../components/CardsSportsAround/Cards";

const SportsAround = () => {

  const dispatch = useDispatch();
  const clubs = useSelector((state) => state.clubs);
  const {
    isLoading: isClubsLoading,
    isDone: isClubsDone,
    data: clubsData
  } = clubs;

  useEffect(() => {
    if (!isClubsLoading && !isClubsDone && !clubsData) {
      dispatch(fetchAllClubs());
    }
  }, []);

  return (
    <>
      <div className="container-fluid  py-1">
        <div className="container  bg-white  p-lg-2 ">
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

          <p className="title mt-3 ">Clubs around you</p>

          <div className="row">
            {
              clubsData && clubsData.length ? clubsData.map((club, ind) => {
                return (ind < 4) && <div className="col-lg-3 col-12" key={ind}>
                  <Cards club={club} />
                </div>
              }) : null
            }
            {/* <div className="col-lg-3 col-12">
              <Cards2 />
            </div>
            <div className="col-lg-3 col-12">
              <Cards2 />
            </div>
            <div className="col-lg-3 col-12">
              <Cards2 />
            </div>
            <div className="col-lg-3 col-12">
              <Cards2 />
            </div>

            <div className="col-lg-3 col-12">
              <Cards2 />
            </div>
            <div className="col-lg-3 col-12">
              <Cards2 />
            </div>
            <div className="col-lg-3 col-12">
              <Cards2 />
            </div>
            <div className="col-lg-3 col-12">
              <Cards2 />
            </div>

            <div className="col-lg-3 col-12">
              <Cards2 />
            </div>
            <div className="col-lg-3 col-12">
              <Cards2 />
            </div>
            <div className="col-lg-3 col-12">
              <Cards2 />
            </div>
            <div className="col-lg-3 col-12">
              <Cards2 />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default SportsAround;
