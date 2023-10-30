import axiosInstance from "../../utils/axiosInstance";
import { BANNER_FAIL, BANNER_FETCHING, BANNER_SUCCESS } from "../constants";

export const fetchBanner = (city) => async (dispatch) => {
    dispatch({ type: BANNER_FETCHING });
    try {
        const { data } = await axiosInstance.get(`user/home/api/getBanner${city ? `?city=${city}` : '' }`);
        dispatch({ type: BANNER_SUCCESS, payload: data.data });
    } catch (error) {
        dispatch({
            type: BANNER_FAIL,
            payload:
                error.response && error.response && error.response.data && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};