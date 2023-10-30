import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocations, setLocation } from "../../redux/actions/locations.actions";
import { fetchSports, setSportId } from "../../redux/actions/sports.actions";
import { MenuItem, Select } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { fetchByKeyword } from "../../redux/actions/search.actions";
import { Dropdown } from "react-bootstrap";
import CustomMenu from "../CustomMenu";
import CustomToggle from "../CustomToggle";

const FilterHeader = () => {

    const locations = useSelector((state) => state.locations) || {};
    const sports = useSelector((state) => state.sports) || {};
    const [searchKeyword, setSearchKeyword] = useState("");

    const {
        isLoading: isLocationsLoading,
        selectedLocation,
        entities: locationEntities
    } = locations;

    const {
        isLoading: isSportsLoading,
        entities: sportsList,
        selectedSportId,
    } = sports;

    const dispatch = useDispatch();
    const onSportsChange = (value) => {
        dispatch(setSportId(value));
    };

    const onLocationChange = (value) => {
        console.log(value);
        dispatch(setLocation(value));
    };

    useEffect(()=>{
        if(!locationEntities){
            dispatch(fetchLocations());
        }
        if (!sportsList){
            dispatch(fetchSports());
        }
    },[]);

    const selectedSportName = (selectedSportId && sportsList && sportsList.length) ? sportsList.find((sport) => sport.sportsId == selectedSportId).displayName : '';

    React.useEffect(() => {
        const getData = setTimeout(() => {
            if (selectedLocation, selectedSportName){
                dispatch(fetchByKeyword(searchKeyword, selectedLocation, selectedSportName));
            }
        }, 500)

        return () => clearTimeout(getData)
    }, [searchKeyword, selectedSportName,selectedLocation]);

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-2 col-12">
                    <div>Selected Location</div>
                    <div className="fw-bold">
                        {
                            isLocationsLoading ? <Skeleton variant="rect" width={200} height={50} /> : (locationEntities && locationEntities.length && selectedLocation) && <Dropdown>
                                <Dropdown.Toggle as={CustomToggle} id="location-dropdown">
                                    {selectedLocation}
                                </Dropdown.Toggle>

                                <Dropdown.Menu as={CustomMenu}>
                                    {
                                        locationEntities.map((location, ind) => {
                                            return <Dropdown.Item key={ind} value={location} active={location == selectedLocation} onClick={() => onLocationChange(location)}>{location}</Dropdown.Item>
                                        })
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        }
                    </div>
                </div>
                <div className="col-lg-8 col-12 my-lg-0 my-3">
                    <div className="position-relative">
                        <FaSearch className="search__icon" />
                        <input
                            className="form-control-search"
                            type="text"
                            placeholder="Search for clubs events..."
                            aria-label="Search"
                            onChange={(event) => setSearchKeyword(event.target.value)}
                        />
                    </div>
                </div>
                <div className="col-lg-2 col-12  ">
                    <div className="filter-container w-100 h-100  border rounded-3 d-flex justify-content-center align-items-center">
                        <FiFilter className="me-2" />
                        {
                            isSportsLoading ? <Skeleton variant="rect" width={200} height={50} /> : (sportsList && sportsList.length && selectedSportId) && <Dropdown>
                                <Dropdown.Toggle as={CustomToggle} id="sports-dropdown">
                                    {selectedSportName}
                                </Dropdown.Toggle>

                                <Dropdown.Menu as={CustomMenu}>
                                    {
                                        sportsList.map((sport, ind) => {
                                            return <Dropdown.Item key={ind} value={sport.sportsId} active={sport.sportsId == selectedSportId} onClick={() => onSportsChange(sport.sportsId)}>{sport.displayName}</Dropdown.Item>
                                        })
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterHeader;