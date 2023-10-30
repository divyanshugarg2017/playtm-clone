import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import "./myBookings.css";
import { BookingsCard } from "../../components/MyBookingsCard/BookingsCard";
import { Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBookingHistory } from "../../redux/actions/booking.actions";

const Mybookings = () => {

	const booking = useSelector((state) => state.booking);
	const {
		isHistoryFetching,
		isHistoryFetchDone,
		history,
		error,
	} = booking;
	const dispatch = useDispatch();

	console.log("history", history);

	const refreshHistory = () => {
		dispatch(fetchBookingHistory());
	};

	useEffect(()=>{
		dispatch(fetchBookingHistory());
	},[]);

	return (
		<>
			<div className="container-fluid bg__profile__o py-5">
				{/* <div className="container mb-3">
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
					<span className="top-txt">My Booking</span>
				</div> */}

				<div className="container  bg-white rounded-3 p-lg-5 ">
					<div className="tabs-container">
						<div className="tab-body-content">
							{
								isHistoryFetching ? <div>Loading,...</div> :
									error ? <div>Something went wrong on our side. We are working on it. please check again later</div> :
										(isHistoryFetchDone && history.length) ? history.map((bookingItem, ind) => {
											return <BookingsCard key={ind} bookingData={bookingItem} onChange={refreshHistory}/>
										}) : <div>No Booking History</div>
							}
						</div>
						{/* <Tabs
							defaultActiveKey="mymatches"
							id="uncontrolled-tab-example"
							className="tabs-container"
						>
							<Tab
								eventKey="mymatches"
								title="My Matches"
								className="tab-body-content"
							>
								{
									isHistoryFetching ? <div>Loading,...</div> : 
										error ? <div>Something went wrong on our side. We are working on it. please check again later</div> :
											(isHistoryFetchDone && history.length) ? history.map((bookingItem,ind)=>{
												return <BookingsCard key={ind} bookingData={bookingItem} />
											}) : <div>No Booking History</div> 
								}
							</Tab>
							<Tab
								eventKey="matchesaroundme"
								title="Matches Around Me"
								className="tab-body-content"
							>
								{/* <BookingsCard /> */}
							{/* </Tab>
						</Tabs> */}
					</div>
				</div>
			</div>
		</>
	);
};
export default Mybookings;
