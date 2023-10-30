import React from 'react'
import { Link } from 'react-router-dom'
import background from '../../assets/images/background.png'
import over from '../../assets/images/over.png'
import { HiLocationMarker } from "react-icons/hi";

const EventsCard2 = () => {
    return (
        <>
            <Link to="PlayArena">
                <div className="card my-2">

                    <div className="offer_img">   <img src={background} alt="..." className="img-fluid" />

                        <div className="offer_overlay">  <img src={over} alt="..." className='img-fluid ' /></div>
                        <div className="overlay">
                            <p className="overlay_txt ms-2">PLAY ARENA</p>
                        </div>
                        <div className="overlay_badge mt-0">
                            <p className="overlay_badge_txt"> Claim now </p>
                        </div>
                    </div>
                    <div className="card-body d-flex m-0 p-2 justify-content-around">
                        <div className="col-lg-4 mt-3 ms-2">
                            <p className='color_blue ms-2'>Jan</p>
                            <p className='fs-3 ms-3 color_blue'>2</p>
                            <p className='color_blue me-1'>Onwards</p>

                        </div>
                        <div className="col-lg-8 mt-3 mb-1">
                            <h6>Tennis Tournament</h6>
                            <div className='d-flex my-2'><p className='me-2'>Singles</p><p>Open Age</p></div>
                            <p className='Knockout'>Knockout</p>
                            <HiLocationMarker />
                            <span className="footer_text ">Play Arena ,BTM 2nd stage</span>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default EventsCard2