import React, { useEffect, useState } from "react";
import bg from "../../assets/images/unsplash_rjWfNR_AC5g.jpg";
import "./playarena.css";
import location from "../../assets/images/location.svg";
import calender from "../../assets/images/calender.png";
import reg from "../../assets/images/reg.png";
import direction from "../../assets/images/direction.png";
import vector from "../../assets/images/vector.png";
import vector_2 from "../../assets/images/vector_2.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Eventcards from "./Eventcards";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchEventDetail } from "../../redux/actions/event.actions";
import { getDaysRangeDetails } from "../../utils/date-time.utils";
import axiosInstance from "../../utils/axiosInstance";
import { Modal } from "react-bootstrap";
import MapContainer from "../../components/MapContainer";

const useTimer = (eventStartDate) => {
  const [timeDifference, setTimeDifference] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const eventDate = new Date(eventStartDate);
      const diffTime = eventDate - currentDate;
      let diffSeconds = Math.floor(diffTime / 1000);
      let diffMinutes = Math.floor(diffSeconds / 60);
      let diffHours = Math.floor(diffMinutes / 60);
      let diffDays = Math.floor(diffHours / 24);
      let diffMonths = Math.floor(diffDays / 30.44);
      let diffYears = Math.floor(diffMonths / 12);

      diffSeconds = Math.round(diffSeconds % 60);
      diffMinutes = Math.round(diffMinutes % 60);
      diffHours = Math.round(diffHours % 24);
      diffDays = Math.round(diffDays % 30.44);
      diffMonths = Math.round(diffMonths % 12);
      diffYears = Math.round(diffYears);

      setTimeDifference({
        years: diffYears,
        months: diffMonths % 12,
        days: diffDays % 30.44,
        hours: diffHours % 24,
        minutes: diffMinutes % 60,
        seconds: diffSeconds % 60,
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [eventStartDate]);

  return timeDifference;
};

const Playarena = () => {

  let { eventId } = useParams();
  const dispatch = useDispatch();
  const events = useSelector(state => state.events);
  const event = events[eventId]||{};
  const [club,setClub] = useState();
  const [show, setShow] = useState(false);

  const {
    eventTitle,
    eventSprotsMode,
    eventDescription,
    eventStartDate,
    eventEndDate,
    regStartDate,
    regEndDate,
    clubId,
    coordinationEmail,
    coordinationNumber,
  } = event;

  useEffect(async ()=>{
    if(clubId){
      const { data } = await axiosInstance.get(`/user/page/clubDetails?clubId=${clubId}`);
      setClub(data.data[0]);
    }
  },[clubId]);

  let eventDateRange;
  if(eventStartDate&&eventEndDate){
    eventDateRange=getDaysRangeDetails({startDate:eventStartDate,endDate:eventEndDate});
  }
  const {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
  } = useTimer(eventStartDate);

  useEffect(() => {
    dispatch(fetchEventDetail(eventId));
  }, []);

  return (
    <>
      <div className="container-fluid p-0">
        <div className="card__playarena position-relative">
          <img src={bg} className="card-img" alt="..." />
          <div className="card-img-overlay ">
            <div className="bg_content ms-lg-5 mt-lg-5 mt-4">
              <div className="card_title_parent d-flex align-items-center justify-content-between">
                {
                  (club && club.customerClubName) && <h5 className="card-title">{club.customerClubName}</h5>
                }
                <div className="vr mx-4 vr-bold"></div>
                {
                  eventTitle && <h4 className="card-title">{eventTitle}</h4>
                }
              </div>
              {
                eventDateRange && <p
                  className="fs-5 my-lg-5 my-3"
                  style={{ color: "#FFDF17", width: "120px" }}
                >{eventDateRange.month} {eventDateRange.dayRange}</p>
              }
              {/* <button type="button" className="btn btn-warning book_now">
                Book Now
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* section 2 starts from here */}
      <div className="container mt-5 container_max_width">
        <div className="row">
          <div className="col-lg-6 section_2">
            <div className="heading d-flex justify-content-lg-between align-items-lg-center position-relative">
              <div className="shuttle_div">
                <h3>{eventSprotsMode}</h3>
              </div>
              {/* <div className="buttons m-lg-0 mb-2">
                <button
                  type="button"
                  className="btn btn-warning text-white fw-bold me-lg-4 me-3"
                >
                  <img src={vector} className="me-2" alt="..." />
                  Corporate
                </button>
                <button type="button" className="btn btn-info fw-bold shuffle">
                  <img src={vector_2} className="me-2" alt="..." />
                  Shuffle
                </button>
              </div> */}
            </div>
            <div className="content_1">
              <div className="d-flex mt-lg-3 my-3">
                <img
                  src={calender}
                  className="calender me-lg-3 me-2"
                  alt="..."
                />
                {
                  eventDateRange && <p className="mb-0">{eventDateRange.dateRange}</p>
                }
              </div>
              {
                (club && club.clubAddress) && <div className="d-flex mt-lg-3 my-3">
                  <img src={location} alt="..." className="me-lg-3 me-2" />
                  <p className="mb-0" alt="...">{club.clubAddress}</p>
                </div>
              }
              {
                (regStartDate && regEndDate) && <div className="d-flex mt-lg-3 my-3">
                  <img src={reg} className="reg me-lg-3 me-2" alt="..." />
                  <p className="mb-0" alt="...">
                    Registration Starts - {regStartDate}, Ends - {regEndDate}
                  </p>
                </div>
              }
              <div className="d-flex mt-lg-3 my-3 cursor-pointer" onClick={() => setShow(true)}>
                <img src={direction} alt="..." className="me-lg-3 me-2" />
                <p
                  className="mb-0 text-decoration-none"
                  style={{ color: "#0085FF" }}
                >
                  Get Direction
                </p>
              </div>
              {
                club ? <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Direction</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <MapContainer latitude={club.latitude} longitude={club.longitude} />
                  </Modal.Body>
                </Modal> : null
              }
              {/* <div className="d-flex justify-content-between ">
                <div className="social_icons mt-3 mb-3 d-flex ">
                  <FaFacebook className="mx-3 fs-4 " />
                  <FaTwitter className="mx-3 fs-4" />
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-lg-6 about">
            <div className="container duration py-lg-3">
              <p className="p-1 mb-0">Starts In</p>
              <div className="d-flex px-lg-5 justify-content-between">
                {
                  years !== 0 && <><p className="years">{years} years </p>:</>
                }
                {
                  months !== 0 && <><p className="months">{months} months </p>:</>
                }
                <p className="day">{days} Days </p>:
                <p className="hours">{hours} Hours</p>:
                <p className="min">{minutes} Minutes</p>:
                <p className="sec">{seconds} Seconds</p>
              </div>
            </div>
            {
              eventDescription && <div className="mt-3">
                <h4>About</h4>
                <p>{eventDescription}</p>
              </div>
            }
          </div>
        </div>
      </div>
      <div className="navbar-tabs-toggler my-5">
        <nav>
          <div
            className="nav nav-tabs ps-5 nav-tab-toggle"
            id="nav-tab"
            role="tablist"
          >
            {/* <button
              className="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Events
            </button> */}
            <button
              className="nav-link active"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="true"
            >
              Organiser
            </button>
            <button
              className="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Rules
            </button>
          </div>
        </nav>
        <div className="tab-content py-3" id="nav-tabContent">
          {/* <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="container-fluid">
              <div className="card-body container">
                <div className="row justify-content-between">
                  <div className="col-lg-4 col-6">
                    <Eventcards />
                  </div>
                  <div className="col-lg-4 col-6">
                    <Eventcards />
                  </div>
                  <div className="col-lg-4 col-6">
                    <Eventcards />
                  </div>
                  <div className="col-lg-4 col-6">
                    <Eventcards />
                  </div>
                  <div className="col-lg-4 col-6">
                    <Eventcards />
                  </div>
                  <div className="col-lg-4 col-6">
                    <Eventcards />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div
            className="tab-pane fade show active"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <div className="container-fluid">
              <div className="card-body container">
                {coordinationEmail  && <h4 className="mb-2">
                  Email : <small class="text-muted">{coordinationEmail}</small>
                </h4>}
                { coordinationNumber && <h4>
                  Phone : <small class="text-muted">{coordinationNumber}</small>
                </h4>}
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <div className="container-fluid">
              <div className="card-body container">
                <p>{eventDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Playarena;
