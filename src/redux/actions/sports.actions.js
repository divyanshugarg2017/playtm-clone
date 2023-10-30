import { dispatchError } from "../../utils/actions.utils";
import axiosInstance from "../../utils/axiosInstance";
import { SET_SPORT_ID, SPORTS_FAIL, SPORTS_FETCHING, SPORTS_SUCCESS } from "../constants";

export const fetchSports = () => async (dispatch) => {
    dispatch({ type: SPORTS_FETCHING });
    try {
        const { data } = await axiosInstance.get(`product/listOfSports`);
        dispatch({ type: SPORTS_SUCCESS, payload: data.data });
    } catch (error) {
        dispatchError(dispatch, SPORTS_FAIL,error);
    }
};

export const setSportId = (sportId) => async (dispatch) => {
    dispatch({
        type: SET_SPORT_ID,
        payload: sportId,
    });
};