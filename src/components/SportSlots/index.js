import React,{ useEffect, useRef, useState } from "react";
import football2 from "../../assets/images/football 2.png";
import badminton_2 from "../../assets/images/badminton_2.jpg";
import kabaddi from "../../assets/images/kabaddi.png";
import volleyball2 from "../../assets/images/volleyball 2.png";
import { selectSport } from "../../redux/actions/booking.actions";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../utils/axiosInstance";
import SportsRight from "../../pages/Sports Paradise/SportsRight";
import SportsCardLeft from "../../pages/Sports Paradise/SportsCardLeft";

const fetchSports = (clubId) => {
    return axiosInstance.get(`/product/clubSportList?clubId=${clubId}`);
};

const sportCardImg = {
    1: kabaddi,
    2: football2,
    3: badminton_2
}


const SportSlots = ({ clubId, onReshedule }) => {
    const myRef = useRef(null);
    const [sports, setSports] = useState();
    const dispatch = useDispatch();

    const selectedSport = useSelector(state => state.booking.selectedSportId);

    const onSelectSport = (sport) => {
        dispatch(selectSport(sport.sportsId, sport));
    };

    useEffect(()=>{
        fetchSports(clubId).then((data) => {
            setSports(data.data.data);
        })
    },[]);

    return (
        <div className="d-flex align-items-start select___sports">
            <div className="col-lg-3 col-12">
 
                <div
                    className="nav flex-column nav-tabs me-3"
                    id="v-tabs-tab"
                    role="tablist"
                    aria-orientation="vertical"
                >
                    {
                        sports && sports.map((sport, ind) => {
                            return <button
                                key={ind}
                                className={`nav-link navilink ${(selectedSport == sport.sportsId) && 'active'}`}
                                id="v-tabs-home-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-tabs-home"
                                type="button"
                                role="tab"
                                aria-controls="v-tabs-home"
                                aria-selected="true"
                                onClick={() => onSelectSport(sport)}
                            >
                                <SportsCardLeft img={sportCardImg[sport.sportsId] || volleyball2} title={sport.sportName} discription={sport.sportDiscription} />
                            </button>
                        })
                    }
                </div>
            </div>
            <div className="col-lg-9 col-12" ref={myRef}>
                <div className="tab-content" id="v-tabs-tabContent">
                    {
                        selectedSport && <div
                            className="tab-pane fade show active"
                            id="v-tabs-home"
                            role="tabpanel"
                            aria-labelledby="v-tabs-home-tab"
                        >
                            <SportsRight clubId={clubId} sports={sports} selectedSportId={selectedSport} onReshedule={onReshedule} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default SportSlots;