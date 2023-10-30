import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import FindSports from "../Find Sports/FindSports";
import { Cards } from "../../components/CardsSportsAround/Cards";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllEvents } from "../../redux/actions/event.actions";
import EventsCard from "../Events/EventsCard";
import { fetchAllClubs } from "../../redux/actions/clubs.actions";
import { fetchByKeyword } from "../../redux/actions/search.actions";
import { Skeleton } from "@material-ui/lab";
import { fetchBanner } from "../../redux/actions/banner.actions";
import axiosInstance from "../../utils/axiosInstance";
import { Carousel } from "react-bootstrap";
import FilterHeader from "../../components/FilterHeader";
import EmptyDataMessage from "../../components/EmptyDataMessage";

const LandingPage = () => {

    const events = useSelector((state) => state.events);
    const clubs = useSelector((state) => state.clubs);

    const locations = useSelector((state) => state.locations)||{};
    const sports = useSelector((state) => state.sports)||{};
    const banner = useSelector((state) => state.banner)||{};

    const {
        isLoading:isLocationsLoading,
        selectedLocation,
        entities:locationEntities
    } = locations;
    const {
        isLoading:isSportsLoading,
        entities:sportsList,
        selectedSportId,
    } = sports;
    const {
        isLoading:isBannerLoading,
        data:bannerData,
        error:bannerError,
    } = banner;

    const dispatch = useDispatch();

    const {
        isLoading:isEventsLoading,
        isDone:isEventsDone,
        data: eventsList
    } = events;
    const { 
        isLoading:isClubsLoading,
        isDone:isClubsDone,
        data:clubsData
    } = clubs;

    const [isDataLoading,setIsDataLoading] = useState(false);
    const fetchDataBasedOnFilter = async (city, sportName) => {
        setIsDataLoading(true);
        const { data } = await axiosInstance.get(`user/home/api/filterRecords?city=${city},sportName=${sportName}`).catch(() => {
            setIsDataLoading(false);
        });
        setIsDataLoading(false);
        console.log("====>data",data);
    };

    useEffect(()=>{
        if (selectedLocation && selectedSportId && sports && sports.entities && sports.entities.length){
            const _sport = sports.entities.find(
                (item) => item.sportsId == selectedSportId
            );
            fetchDataBasedOnFilter(selectedLocation, _sport.sportsName);
        }
    },[selectedLocation,selectedSportId])

    useEffect(()=>{
        if (!isEventsLoading && !isEventsDone && !eventsList){
            dispatch(fetchAllEvents());
        }
        if (!isClubsLoading && !isClubsDone && !clubsData) {
            dispatch(fetchAllClubs());
        }
        dispatch(fetchBanner('Chennai'));
    },[]);

    return (
        <>
            <FilterHeader/>
            <div className="container-fluid p-0 d-flex mt-5">
                <div className="container">
                    <div className="col-lg-12">
                        {" "}
                        {
                            isBannerLoading ? 
                                <Skeleton variant="rect" width={1200} height={350} /> :
                                <Carousel>
                                    {
                                        (bannerData && bannerData.length && !bannerError) && bannerData.map((banner,ind)=>{
                                            return <Carousel.Item key={ind} interval={5000}>
                                                <div className="card">
                                                    <img src={banner.bannerWebURL} className="card-img" alt="..." />
                                                    <div className="card-img-overlay ">
                                                        <div className="bg_content ms-lg-5 mt-lg-5 mt-4">
                                                            <div className="card_title_parent d-flex align-items-center justify-content-between">
                                                                <h5 className="card-title">{banner.city}</h5>
                                                                <div className="vr mx-4 vr-bold"></div>
                                                                <h4 className="card-title titleshuttle">
                                                                    {banner.bannerName}
                                                                </h4>
                                                            </div>
                                                            {/* <p
                                            className="fs-5 my-lg-5 my-3"
                                            style={{ color: "#FFDF17", width: "120px" }}
                                        >
                                            {" "}
                                            December 7th & 8th{" "}
                                        </p> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Carousel.Item>
                                        })
                                    }
                                </Carousel>
                        }
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row py-3">
                    {
                        (!isClubsLoading && isClubsDone && clubsData && clubsData.length) ? <>
                            <div className="d-flex justify-content-between align-items-center sports___home">
                                <h3 className="my-3">Clubs around you</h3>
                                {
                                    clubsData.length > 3 && <Link to="clubs">
                                        {" "}
                                        <p className="fw-bold"> View All</p>
                                    </Link>
                                }
                            </div>
                            {
                                clubsData.length ? clubsData.map((club, ind) => {
                                    return (ind < 4) && <div className="col-lg-3" key={ind}>
                                        <Cards club={club} />
                                    </div>
                                }) : null
                            }
                        </> : (isClubsLoading) ? <div className="align-items-center d-flex gap-2 justify-content-center text-primary my-4">
							<div class="spinner-border" role="status">
							</div>
							<span className="ml-2">Loading...</span>
						</div> : <EmptyDataMessage className="my-4" message={"No <b>Clubs</b> data available for the selected <b>City</b> and <b>Sport</b>"}/>
                    }

                    {
                        (eventsList && eventsList.length) ? <>
                            <div className="d-flex justify-content-between align-items-center sports___home">
                                <h3 className="my-3">Events around you</h3>
                                {
                                    eventsList.length > 3 && <Link to="/events">
                                        {" "}
                                        <p className="fw-bold view"> View All</p>
                                    </Link>
                                }
                            </div>
                            {
                                eventsList.length ? eventsList.map((event,ind)=>{
                                    return (ind <4) && <div className="col-lg-3" key={ind}>
                                        <EventsCard event={event}/>
                                    </div>
                                }) : null
                            }
                        </> : (isEventsLoading) ? <div className="align-items-center d-flex gap-2 justify-content-center text-primary my-4">
							<div class="spinner-border" role="status">
							</div>
							<span className="ml-2">Loading...</span>
						</div> : <EmptyDataMessage className={"mt-4"} message={"No <b>Events</b> data available for the selected <b>City</b> and <b>Sport</b>"} />
                    }
                </div>
            </div>

            {/* <FindSports /> */}
        </>
    );
};

export default LandingPage;
