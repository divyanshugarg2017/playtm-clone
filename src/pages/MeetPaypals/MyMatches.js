import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { GiSoccerField } from "react-icons/gi";
import Chat from "../../assets/images/chat.png";
import badminton from "../../assets/images/icons/badminton.png";

const MyMatches = () => {
  return (
    <>
      <hr />
      <div className="card_body mt-4 px-3  pb-5">
        <div className="d-flex justify-content-between flex-lg-row flex-column-reverse">
          <p className="card_titles mt-2">Play Arena sports paradise</p>

          <div className="d-flex">
            <button type="button" className="btn btn-info fw-bold shuffle me-3">
              <img src={badminton} className="me-2" alt="..." />
              Badminton
            </button>
            <button type="button" className="btn btn-outline-success">
              Upcoming
            </button>
          </div>
        </div>
        <p className="mt-2">BTM 2nd stage, near kk supermarket.....</p>

        <div className="my-2">
          <AiOutlineCalendar /> <span>Sun ,10th Dec 07:30am </span>
        </div>

        <div className="mt-1">
          <GiSoccerField /> <span>Premium Hybrid court</span>
        </div>
        <div className="text-end mt-3 chat_invite">
          <button type="button" className="btn btn-outline-primary me-3">
            <img src={Chat} className="me-2" alt="..." />
            Chat
          </button>
          <button type="button" className="btn btn-primary px-4">
            Invite
          </button>
        </div>
      </div>
    </>
  );
};

export default MyMatches;
