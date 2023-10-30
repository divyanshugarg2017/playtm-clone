import React from 'react'
import { Link } from 'react-router-dom'
import background from '../../assets/images/background.png'
import over from '../../assets/images/over.png'
import { HiLocationMarker } from "react-icons/hi";
import { formatDate } from '../../utils/date-time.utils';

const EventsCard = ({event}) => {

    const {
        eventStartDate,
        eventTitle,
        genderMate,
        eventSprotsMode,
        eventDescription,
        eventId,
        clubId,
    } = event;

    const {
        date,
        month
    } = formatDate(eventStartDate);

    return (
        <>
            <Link to={`/event/${eventId}`}>
                <div className="card my-2">


                    <div className="offer_img">   <img src={background} alt="..." className="img-fluid" />

                        <div className="offer_overlay">  <img src={over} alt="..." className='img-fluid ' /></div>
                        <div className="overlay">
                            <p className="overlay_txt ms-2">PLAY ARENA</p>
                        </div>
                        <div className="overlay_badge mt-0">
                            <p className="overlay_badge_txt"> Check now </p>
                        </div>
                    </div>
                    <div className="card-body d-flex m-0 p-2">
                        <div className="col-lg-4 mt-3 ms-2">
                            {
                                (month) && <p className='color_blue ms-2'>{month}</p>
                            }
                            <p className='fs-3 ms-3 color_blue'>{date}</p>
                            <p className='color_blue me-1'>Onwards</p>

                        </div>
                        <div className="col-lg-8 mt-3 mb-1">
                            <h6>{eventTitle}</h6>
                            <div className='d-flex my-2'>
                                {
                                    genderMate && <p className='me-2'>{genderMate}</p>
                                }
                                {
                                    eventSprotsMode && <p>{eventSprotsMode}</p>
                                }
                            </div>
                            {
                                eventDescription && <p className='Knockout'>{eventDescription}</p>
                            }
                            {/* <HiLocationMarker />
                            <span className="footer_text ">Play Arena ,BTM 2nd stage</span> */}
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default EventsCard