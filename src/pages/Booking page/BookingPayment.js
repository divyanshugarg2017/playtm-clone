import React, { useCallback, useEffect, useState } from "react";
import BookingEvent from "./BookingEvent";
import "./booking_payment.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { setBookedPreOrderId } from "../../redux/actions/booking.actions";

const BookingPayment = () => {

  let { clubId } = useParams();
  const booking = useSelector(state => state.booking)||{};
  const {
    slot={},
    selectedDate,
    selectedDay,
    selectedSportId,
    selectedSlotIds=[]
  } = booking;
  const { price } = slot;
  const selectedSport = useSelector(state => state.booking.selectedSport);

  const [isBooking,setIsBooking]=useState(false);
  const [coupon, setCoupon] = useState('');
  const [slots, setSlots] = useState();
  const [couponError, setCouponError] = useState('');
  const [couponMaxAmount, setCouponMaxAmount] = useState();
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const fetchSlots = useCallback(async () => {
    const { data } = await axiosInstance.get(`user/page/clubSlot/view?clubId=${clubId}&selectedDate=${selectedDate}&sportId=${selectedSportId}&days=${selectedDay}`); // API:400 selectedDate="${selectedDate}",
    if(data.statusCode==0){
      const keys = Object.keys(data.data);
      const slotsArray = [];
      keys.forEach((key)=>{
        slotsArray.push(...data.data[key]);
      });
      setSlots(slotsArray);
      console.log(slotsArray);
    }
  }, [clubId, selectedDate, selectedDay, selectedSportId]);

  const bookSlot = async () => {
    setIsBooking(true);
    const { data } = await axiosInstance.post('customer/api/v1/slotBook', {
      "clubId": clubId,
      "slotId": selectedSlotIds,
      "paymentMode": "Cash",
      "remark": new Date().toString(),
    }); // API:400 selectedDate="${selectedDate}",
    if (data.statusCode == 1) {
      dispatch(setBookedPreOrderId(data.data[0].preOrderId));
      await confirmBooking(data.data[0].preOrderId);
    }
  };

  const verifyCoupon = useCallback(async() => {
    setCouponError('');
    if(coupon){
      try {
        const { data } = await axiosInstance.get(`/club/api/v1/couponViewById?clubId=${clubId}`);
        if (data.statusCode==1){
          const coupons = data.data;
          const givenCoupon = coupons.filter((_coupon) => _coupon.couponCode.toLowerCase() == coupon.toLowerCase())[0];
          if (givenCoupon && givenCoupon.couponMaxAmount){
            setCouponMaxAmount(givenCoupon.couponMaxAmount);
          }
          else{
            setCouponMaxAmount(0);
            setCouponError('Coupon code is invalid.');
          }
        }
        else{
          setCouponMaxAmount(0);
          setCouponError('Coupon code is invalid.');
        }
      } catch (error) {
        setCouponMaxAmount(0);
        setCouponError('Coupon code is invalid.');
      }
    }else{
      setCouponMaxAmount(0);
      setCouponError('Please enter the coupon code.');
    }
  },[coupon]);

  useEffect(()=>{
    if (clubId, selectedDate, selectedDay, selectedSportId){
      fetchSlots();
    }
    else{
      navigation(`/club/${clubId}`);
    }
  },[]);


  const confirmBooking = async (preOrderId) => {
    const {data} = await axiosInstance.post(
      '/customer/api/v1/slotBooking/confirm',
      {
        "clubId": Number(clubId),
        "slotId": selectedSlotIds,
        "paymentMode": "Cash",
        "remark": new Date().toString(),
        "preOrderId": preOrderId
      }
    );
    setIsBooking(false);
    navigation(`/`);
  };

  const filteredSlots = (slots && slots.length && selectedSlotIds) ? selectedSlotIds.map((slotId) => {
    const slot = slots.find((slot) => slot.id == slotId);
    return slot
  }) : [];

  const totalAmount = (filteredSlots && filteredSlots.length) ? filteredSlots.reduce((amount,slot)=>{
    return amount + ((slot && slot.price) ? Number(slot.price):0 )
  },0):0;


  const finalAmount = totalAmount - (couponMaxAmount||0)

  return (
    <>
      <div className="container-fluid booking_payment d-flex py-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 booking_event_responsive ">
              {
                (filteredSlots && filteredSlots.length) ? filteredSlots.map((slot,ind)=>{
                  return <BookingEvent slot={slot} key={ind}/>
                }) : null
              }
            </div>
            <div className="booking_login_payment py-4 px-3 col-lg-5">
              <div className="py-3 me-3">
                <div className="d-flex justify-content-between align-items-center">
                  <p>Court Price</p>
                  <p>INR {price}</p>
                </div>
              </div>
              <div className="d-flex justify-content-between booking_login_payment_input mb-4 ">
                <input
                  type="text"
                  value={coupon}
                  onChange={(event)=>setCoupon(event.target.value)}
                  placeholder="Enter Coupon code"
                  className="w-100 py-2"
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary me-2 ms-3 apply_btn "
                  onClick={verifyCoupon}
                >
                  Apply
                </button>
              </div>
              {
                couponMaxAmount && <div className="align-items-center d-flex gap-2 justify-content-center text-primary my-2">
                  <span style={{ color: "green" }}>Coupon amount applied INR {couponMaxAmount}</span>
                </div>
              }
              {
                couponError && <div className="align-items-center d-flex gap-2 justify-content-center text-primary my-2">
                  <span className="error">{couponError}</span>
                </div>
              }
              <div className=" me-3 total_amnt">
                <div className="d-flex justify-content-between total_amnt_2">
                  <p style={{ color: "green" }}>Total amount</p>
                  <p style={{ color: "green" }}>INR {finalAmount}</p>
                </div>

                <div className=" between  ">
                  {/* <div className="d-flex justify-content-between mt-2 ">
                    <p>Convenience Fee</p>
                    <p>INR 14.75</p>
                  </div> */}

                  <div className=" mt-3 pay py-2 px-3 advance_pay">
                    <div className="d-flex justify-content-between fs-4 ">
                      <p>INR {finalAmount}</p>
                      <p>INR 0.00</p>
                    </div>
                    <div className="d-flex justify-content-between mt-1 advance_pay_2 ">
                      <p style={{ color: "green" }}>Advance Payable</p>
                      <p style={{ color: "green" }}>To be paid at venue</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="mt-3">
                <input type="checkbox" />
                <span className="mx-2">
                  Say goodbye to injuries by adding{" "}
                  <span className="red_underline">
                    Badminton Fitness Cover (Benefits upto Rs 25,000/-){" "}
                  </span>{" "}
                  at 9.00 / Session
                </span>
              </div> */}
              <div className="none">
                <p className="mt-3 mb-2">Reschedule Policy</p>
                <span>
                  Rescheduling is allowed 2hrs prior to slot time. Rescheduling
                  of a booking can be done only 2 times.Once rescheduled,booking
                  cannot be cancelled{" "}
                </span>
              </div>
              {/* <div className="none">
                <p className="mt-3 mb-2">Cancellation Policy</p>
                <span>
                  0-2 hrs prior to slot:Cancellations not allowed. &gt;2 hrs
                  prior to slot:15.0% of Gross Amount will be deducted as
                  cancellation fee
                </span>
              </div> */}
              {/* <div className="none">
                <p>Club Policy</p>
                <Link to="/Policy">
                  {" "}
                  <p className="red_underline">click to see</p>
                </Link>
              </div> */}
              {/* <div className="none">
                <p className="mt-3 mb-2">Terms of Service</p>
                <p>
                  By continuing, you agree to our{" "}
                  <Link to="/Terms">
                    <span className="red_underline">terms of service </span>
                  </Link>
                </p>
              </div> */}
              <div className="d-grid gap-2 py-4 pay_btn">
                <button 
                  onClick={bookSlot}
                  className="btn btn-primary" 
                  type="button"
                >
                  <div className="d-flex justify-content-between">
                    <p>INR {finalAmount}</p>
                    <p>Proceed to pay &gt;</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPayment;
