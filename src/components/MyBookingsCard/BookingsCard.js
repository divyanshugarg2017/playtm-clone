import React, { useCallback, useEffect, useState } from "react";
import "./bookingCard.css";
import banner from "../../assets/images/banner1.png";
import { AiOutlineCalendar } from "react-icons/ai";
import { GiSoccerField } from "react-icons/gi";
import axiosInstance from "../../utils/axiosInstance";
import SportSlots from "../SportSlots";

export const BookingsCard = ({ bookingData,onChange }) => {
	const { 
		modifyDate, 
		remark,
		clubSlotId ,
		orderId,
		clubBookingStaus
	} = bookingData;
	const [club, setClub] = useState();
	const [ bookingOptions,setBookingOptions ] = useState();
	const [cancelBooking,setCancelBooking] = useState(false);
	const [showReshedule, setShowReshedule] = useState(false);

	const onCancelBooking = useCallback(async() => {
		const { data } = await axiosInstance.get(`customer/api/v1/cancelSlotBooking?orderId=${orderId}`);
		onChange && onChange();
	}, [orderId]);

	const onResheduleBooking = useCallback(async (ids=[]) => {
		const { data } = await axiosInstance.post(`customer/api/v1/rescheduleSlotBooking?orderId=${orderId}&newSlotIds=${JSON.stringify(ids)}`);
		setShowReshedule(false);
		onChange && onChange();
	}, [orderId]);

	useEffect(async () => {
		if (clubSlotId) {
			const { data } = await axiosInstance.get(`/user/page/clubDetails?clubId=${clubSlotId}`);
			const { data: bookingData } = await axiosInstance.get(`/customer/api/v1/club/reschedulePolicy?clubId=${clubSlotId}`);
			if (bookingData.statusCode==1){
				setBookingOptions(bookingData.data);
			}
			setClub(data.data[0]);
		}
	}, [clubSlotId]);

	console.log("====>bookingData", bookingData);
	return (
		<div className="container my-3">
			<div className="row align-items-center">
				<div className="col-lg-4">
					<div className="card bg-dark text-white">
						<div className="h-100 ">
							<img src={banner} className="card-img h-100 overflow-hidden" alt="..." />
						</div>
						{/* <div className="two_km_imgdiv">
							<p className="card-text two_km">2.0km</p>
						</div> */}
					</div>

				</div>
				<div className="card_body col-lg-8">
					<div className="d-flex justify-content-between flex-lg-row flex-column-reverse">
						<p className="card_titles mt-3">{remark}</p>

						<div className="d-flex mt-3">
							{/* <button
								type="button"
								className="btn btn-info fw-bold shuffle me-3"
							>
								<img src={badminton} className="me-2" alt="..." />
								Badminton
							</button> */}
							<button type="button" className="btn btn-outline-success">
								Upcoming
							</button>
						</div>
					</div>
					{
						(club && club.clubAddress) && <p className="mt-2">{club.clubAddress}</p>
					}

					{
						modifyDate && <div className="mt-1">
							<AiOutlineCalendar />
							<span className="mt-2">{modifyDate}</span>
						</div>
					}

					<div className="mt-1">
						<GiSoccerField /> <span>Premium Hybrid court</span>
					</div>

					{
						((bookingOptions && bookingOptions.cancelEnable == 'Y') || (bookingOptions && bookingOptions.rescheduleEnable == 'Y')) && <div className="text-lg-end mt-3 ml-3">
							{
								(bookingOptions && bookingOptions.cancelEnable == 'Y' && bookingData.clubBookingStaus !== 'N') && <button type="button" className="btn btn-primary px-4 mr-4" onClick={onCancelBooking} style={{marginRight:'30px'}}>
									Cancel
								</button>
							}
							{
								(!showReshedule&& bookingOptions && bookingOptions.rescheduleEnable == 'Y' && bookingData.clubBookingStaus !== 'N') && <button type="button" className="btn btn-primary px-4" onClick={() => setShowReshedule(true)}>
									Reschedule
								</button>
							}
						</div>
					}
				</div>
				{
					(showReshedule && clubSlotId) && <SportSlots clubId={clubSlotId} onReshedule={onResheduleBooking} />
				}
			</div>
		</div>
	);
};
