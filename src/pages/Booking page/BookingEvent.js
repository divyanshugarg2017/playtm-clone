import React from "react";
import badminton_2 from "../../assets/images/badminton_2.jpg";
import { timeStampFormatter } from "../../utils/date-time.utils";
import "./booking_event.css";

const Booking_event = ({slot}) => {

  return (
    <>
      <div className="booking_event ">
        <div className="responsive">
          <div className="booking_event_title py-3 mx-3">
            <h4>Play Arena</h4>
          </div>
          <hr />
          {
            (slot && slot.sportName) && <div className="booking_event_name mx-3 ">
              {slot.sportName} <img src={badminton_2} alt="..." className="mx-4" />
            </div>
          }
        </div>
        <hr />
        <div className="booking_event_details d-flex justify-content-between">
          {
            slot && <div>
              <ul>
                <li >{slot.courtName}</li>
                <li>{timeStampFormatter(slot.createdDate)}</li>
                <li>{slot.startAndEndTime}</li>
                <li>INR {slot.price}</li>
              </ul>
            </div>
          }
          {/* <div className="px-5 py-3 responsive_btn">
            <button type="button" className="btn btn-outline-danger ">
              Remove
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Booking_event;
