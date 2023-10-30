import axiosInstance from "../../utils/axiosInstance";
import { LOCATIONS_FAIL, LOCATIONS_FETCHING, LOCATIONS_SUCCESS, SET_LOCATION } from "../constants";

export const fetchLocations = () => async (dispatch) => {
    dispatch({ type: LOCATIONS_FETCHING });
    try {
        const { data } = await axiosInstance.get(`user/home/api/cities`);
        dispatch({ type: LOCATIONS_SUCCESS, payload: data.data });
    } catch (error) {
        dispatch({
            type: LOCATIONS_FAIL,
            payload:
                error.response && error.response.data && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const setLocation = (location) => (dispatch) => {
    dispatch({type:SET_LOCATION,payload:location});
};