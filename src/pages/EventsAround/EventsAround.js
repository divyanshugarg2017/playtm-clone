import React, { useEffect } from "react";
import "../SportsAround/sportsaround.css";
import { FaSearch } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import EventsCard2 from "../Events/EventsCard2";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllEvents } from "../../redux/actions/event.actions";
import EventsCard from "../Events/EventsCard";
import FilterHeader from "../../components/FilterHeader";

const EventsAround = () => {

  const events = useSelector((state) => state.events);
  const {
    isLoading: isEventsLoading,
    isDone: isEventsDone,
    data: eventData,
  } = events;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isEventsLoading && !isEventsDone && !eventData) {
      dispatch(fetchAllEvents());
    }
  }, []);

  return (
    <>
      <div className="container-fluid  py-1">
        <div className="container  bg-white  p-lg-2 ">
          <FilterHeader/>

          <p className="title mt-3 ">Events around you</p>

          <div className="row">
            {
              eventData && eventData.length ? eventData.map((event, ind) => {
                return (ind < 4) && <div className="col-lg-3  col-12" key={ind}>
                  <EventsCard event={event} />
                </div>
              }) : null
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsAround;
