import React, { useEffect, useRef, useState } from "react";
import paradise from "../../assets/images/paradise.jpg";
import banner from "../../assets/images/unsplash_rjWfNR_AC5g.jpg";
import splash from "../../assets/images/splashscreen1.jpg";
import direction from "../../assets/images/direction.png";
import ellipse from "../../assets/images/Ellipse 31.png";
import cock from "../../assets/images/cock.png";
import football from "../../assets/images/football_1.png";
import rugby from "../../assets/images/rugby_1.png";
import kabaddi from "../../assets/images/kabaddi.png";
import "./sportsparadise.css";
import star from "../../assets/images/star-fill.svg"
import badminton_2 from "../../assets/images/badminton_2.jpg";
import football2 from "../../assets/images/football 2.png";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchClubDetail } from "../../redux/actions/clubs.actions";
import { formatTime } from "../../utils/date-time.utils";
import axiosInstance from "../../utils/axiosInstance";
import { Modal } from "react-bootstrap";
import MapContainer from "../../components/MapContainer";
import SportSlots from "../../components/SportSlots";

const SportsParadise = () => {
	let { clubId } = useParams();
	const dispatch = useDispatch();
	const clubs = useSelector(state => state.clubs);
	const club = clubs[clubId];
	const [sports, setSports] = useState();
	const [show, setShow] = useState(false);

	const [showAment, setShowAment] = useState(false);

	const selectedSport = useSelector(state=> state.booking.selectedSportId);

	useEffect(() => {
		if (!club) {
			dispatch(fetchClubDetail(clubId));
		}
	}, []);


	console.log('club', club);

	return (
		<>
			<div
				id="carouselExampleIndicators"
				className="carousel slide carrrr"
				data-bs-ride="carousel"
			>
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item sportsparadiseimg active">
						<img src={paradise} className="d-block" alt="..." />
					</div>
					<div className="carousel-item sportsparadiseimg">
						<img src={banner} className="d-block" alt="..." />
					</div>
					<div className="carousel-item sportsparadiseimg">
						<img src={splash} className="d-block" alt="..." />
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			{/* Carousel ends*/}

			<div className="container-fluid mt-3 px-lg-5 ">
				<div className="row">
					<div className="col-lg-6 ">
						<div className="paradise_div d-flex justify-content-between align-items-center">
							{club && <h4>{club.customerClubName}</h4>}
							<div className=" desktop_view d-flex">
								{
									club && <p style={{ color: "green" }}> Open {formatTime(club.openTime)}</p>
								}
								{
									club && <p className="mx-2">Closes {formatTime(club.closeTime)}</p>
								}
								{/* <button
									type="button"
									className="btn btn-info py-0 px-2 d-flex justify-content-center align-items-center"
									style={{ color: "white" }}
								>
									4.6 <img src={star} alt="..." className="ms-1 mt-1" />
								</button> */}
							</div>
						</div>

						<div className="responsive_5">
							<div className="d-flex align-items-center mt-2 responsive_6">
								<p className="mx-2" style={{ color: "green" }}>
									Open
								</p>
								<p className="me-3">Closes 8pm</p>
								<button
									type="button"
									className="btn btn-info py-0 px-4 "
									style={{ color: "white" }}
								>
									4.6 <img src={star} alt="..." />
								</button>
							</div>
							<div>
								{
									club && <p className="mt-3">{club.clubAddress}</p>
								}

								<div className="mt-3 responsive_7">
									<div className="mt-2 d-flex align-items-lg-center cursor-pointer" onClick={() => setShow(true)}>
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

									{/* <div className="mt-2 d-flex align-items-lg-center">
										<img src={safety} alt="..." className="me-lg-3 me-2" />
										<p
											className="mb-0 text-decoration-none"
											style={{ color: "#0085FF" }}
										>
											Max safety measures followed here
										</p>
									</div> */}
								</div>

								{/* <div className="social_icons mt-3 mb-3 d-flex justify-content-end ">
									<FaFacebook className="mx-3 fs-4 " />
									<FaTwitter className="mx-3 fs-4" />
								</div> */}
							</div>
						</div>
						<hr />

						<div className="container ">
							<div className="row ">
								<div className="facility d-flex justify-content-between flex-wrap">
									{
										(club && club.amenitieList && club.amenitieList.length) ? club.amenitieList.map((amentite,ind) => {
											return <div key={ind} className="col-lg-6">
												<div className="d-flex mb-3 ">
													<img src={ellipse} className="me-3 " alt="..." />
													<p>{amentite.amenitiesName}</p>
												</div>
											</div>
										}) : null
									}
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 sports_available">
						{
							club && club.sprotsModelList && <div className="container pb-4">
								<h3>Sports available</h3>
								<div className="d-flex">
									{
										club.sprotsModelList.map((sport,ind) => {
											const sportLogo = sport.sportsId == 3 ? cock : sport.sportsId == 2 ? football : sport.sportsId == 1 ? rugby : rugby;
											return <div className="d-flex flex-column" key={ind}>
												<button type="button" className="btn btn-primary me-5">
													<img src={sportLogo} alt="..." />
												</button>
												<span>{sport.displayName}</span>
											</div>
										})
									}
								</div>
							</div>
						}
						{
							club && club.aboutClub && <div className="mt-3 container">
								<h4>About</h4>
								<p className="mt-3">
									{club.aboutClub}
								</p>
							</div>
						}
					</div>
				</div>
			</div>
			<div className="container-fluid bottom_section full_width">
				<div style={{maxWidth:"95%"}} className="container pb-5">
					<div className="row">
						<h3 className="mb-3 mt-4">Select Sports</h3>
						{
							clubId && <SportSlots  clubId={clubId}/>
						}
					</div>
				</div>
			</div>
		</>
	);
};

export default SportsParadise;
