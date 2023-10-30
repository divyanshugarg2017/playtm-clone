import React, { useCallback, useEffect, useState } from "react";
import DateCard from "./DateCard";
import { Link, useNavigate } from "react-router-dom";
import player1 from "../../assets/images/player1.png";
import axios from "axios";
import { generateDateObjects } from "../../utils/date-time.utils";
import axiosInstance from "../../utils/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { proceedToBooking, setBookedPreOrderId, setselectedDate, setselectedDay } from "../../redux/actions/booking.actions";

const SportsRight = ({ sports, selectedSportId, clubId, onReshedule }) => {
	const [otp, setotp] = useState("");
	const [number, setnumber] = useState("");
	const [slots, setSlots] = useState();
	const [loadingSlots, setLoadingSlots] = useState(false);
	const dates = generateDateObjects();
	const dispatch = useDispatch();
	const navigation = useNavigate();
	const [slotIds,setSlotIds] = useState([]);
	const [error,setError] = useState('');

	const onSelectSlot = useCallback((slotId) => {
		setError('');
		const _slotIds = slotIds.includes(slotId) ? slotIds.filter((id)=>id!==slotId) : [...slotIds,slotId];
		console.log('_slotIds', _slotIds);
		setSlotIds(_slotIds);
	}, [slotIds]);

	const booking = useSelector(state=> state.booking)||{};

	const { 
		slot:selectedSlotData
	} = booking;

	// /user/page/clubSlot/view

	const selectedSport = sports && sports.find(sport => sport.sportsId === selectedSportId);
	const selectedSportName = selectedSport ? selectedSport.sportName : null;

	const sendotpurl = `http://playersvictory.in:8082/PVCORE/admin/getOtp?mobile=${number}&deviceType=Android&newUser=Y`;
	const verifyotpurl = `http://playersvictory.in:8082/PVCORE/admin/clubOTPVerification?mobile=${number}&otp=${otp}`;
	const sendotp = async () => {
		await axios.get(sendotpurl).then((res) => console.log(res));
	};
	const verifyotp = async () => {
		await axios.get(verifyotpurl).then((res) => console.log(res));
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const fetchSlots = async (selectedDate,day) => {
		setLoadingSlots(true);
		dispatch(setselectedDate(selectedDate));
		dispatch(setselectedDay(day));
		const { data } = await axiosInstance.get(`user/page/clubSlot/view?clubId=${clubId}&selectedDate=${selectedDate}&sportId=${selectedSportId}&days=${day}`); // API:400 selectedDate="${selectedDate}",
		console.log("====>data", data);
		setSlots(data.data);
		setLoadingSlots(false)
	};

	const navigateToPayments = () => {
		if (onReshedule){
			onReshedule(slotIds);
			return;
		}
		if (slotIds.length){
			dispatch(proceedToBooking(slotIds));
			navigation(`/club/${clubId}/book`);
		}
		else{
			setError('Please select some slot to proceed.')
		}
	};

	return (
		<>
			<div className="bookingslots container mb-5">
				<div className="row ">
					<div className="mt-4">
						<h3 className="mb-3 ms-3">{onReshedule ? 'Reschedule slot': `Booking Slots for ${selectedSportName}`}</h3>
					</div>
					<div className="d-flex datecardmobile mb-3">
						{
							dates.map((date, ind) => {
								return <DateCard key={ind} onClick={() => { fetchSlots(date.value, date.apiDay) }} day={date.day} date={`${date.date} ${date.mon}`} id={date.value} name="day" />
							})
						}
					</div>
					{
						loadingSlots ? <div className="align-items-center d-flex gap-2 justify-content-center text-primary">
							<div class="spinner-border" role="status">
							</div>
							<span className="ml-2">Loading...</span>
						</div> : (slots && typeof (slots) === 'object' && Object.keys(slots).length) ? <>
							{
								Object.keys(slots).map((courtName,ind) => {
									const courtSlots = slots[courtName];
									return <React.Fragment key={ind}>
										<p className="mb-2  ms-3 fw-bold">Select slot from {courtName}</p>
										<div
											className="d-flex flex-wrap datecardmobile_2 mb-3"
											id="21"
											name="court"
										>
											{
												courtSlots.map((_slot,ind) => {
													return <DateCard type="checkbox" key={ind} onClick={(event) => {onSelectSlot(_slot.id)}} disable={_slot.status!=='New'} date={_slot.startAndEndTime} id={_slot.id} name="slot" />;
												})
											}
										</div>
									</React.Fragment>
								})
							}
						</> : typeof (slots) == 'string' && <p className="mb-2  ms-3 fw-bold">{slots}</p>
					}
					{
						(booking && booking.slot && booking.slot.price) && <p className="mb-2  ms-3 fw-bold">Total cost of the booking is : ₹ {booking.slot.price}</p>
					}

					<div className="d-grid col-6 mx-auto mt-4 mb-4">
						<div
							className="modal fade"
							id="exampleModalToggle"
							aria-hidden="true"
							aria-labelledby="exampleModalToggleLabel"
							tabIndex="-1"
						>
							<div className="modal-dialog modal-lg modal-sm modal-md modal-dialog-centered ">
								<div className="modal-content ">
									<div className="mobile_card">
										<div className="row">
											<div className="col-lg-5 mobile d-flex justify-content-center align-items-center p-0 ">
												<div className="mobile_img ">
													<img src={player1} alt="..." />
												</div>
											</div>
											<div className="col-lg-7 border p-0">
												<div className="mobile_form d-flex justify-content-center align-items-center flex-column ">
													<div>
														<h5 className="fs-4 ">Enter Your Mobile Number</h5>
													</div>
													<div className="mt-5 d-grid col-10 mx-auto mobile_input">
														<input
															type="number"
															placeholder="+91 9999999999"
															maxLength="10"
															onChange={(e) => setnumber(+e.target.value)}
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
									<button
										className="btn btn-primary my-3 w-25 mx-auto"
										data-bs-target="#exampleModalToggle2"
										data-bs-toggle="modal"
										data-bs-dismiss="modal"
										onClick={sendotp}
									>
										Get OTP
									</button>
								</div>
							</div>
						</div>

						<div
							className="modal fade"
							id="exampleModalToggle2"
							aria-hidden="true"
							aria-labelledby="exampleModalToggleLabel2"
							tabIndex="-1"
						>
							<div className="modal-dialog modal-lg modal-dialog-centered ">
								<div className="modal-content ">
									<div className="mobile_card">
										<div className="row">
											<div className="col-lg-5 mobile d-flex justify-content-center align-items-center p-0 ">
												<div className="mobile_img ">
													<img src={player1} alt="..." />
												</div>
											</div>
											<div className="col-lg-7 border p-0">
												<div className="mobile_form d-flex justify-content-center align-items-center flex-column ">
													<div>
														<h5 className="fs-4 ">Enter OTP</h5>
													</div>
													<div className="mt-5 d-grid col-10 mx-auto mobile_input">
														<input
															type="password"
															placeholder="+91 9999999999"
															maxLength="6"
															onChange={(e) => setotp(e.target.value)}
														/>
													</div>
												</div>
											</div>
										</div>
									</div>

									<Link to="/Booking" className="mx-auto  my-3 ">
										<button
											className="btn btn-primary px-5 w-100"
											data-bs-target="#exampleModalToggle2"
											data-bs-toggle="modal"
											data-bs-dismiss="modal"
										>
											Proceed
										</button>
									</Link>
								</div>
							</div>
						</div>
						{
							error && <div className="align-items-center d-flex gap-2 justify-content-center text-primary my-2">
								<span className="error">{error}</span>
							</div>
						}
						<button
							className="btn btn-primary px-5 w-100"
							onClick={navigateToPayments}
						>
							{
								onReshedule ? 'Reschedule' : 'Book Now'
							}
						</button>
						{/* <Link
							className="btn btn-primary"
							to={`/club/${clubId}/book`}
						>Book Now</Link> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default SportsRight;
