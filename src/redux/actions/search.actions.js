import { dispatchError } from "../../utils/actions.utils";
import axiosInstance from "../../utils/axiosInstance";
import { SEARCH_FAIL, SEARCH_REQUEST, SEARCH_SUCCESS } from "../constants/search.constants";

export const fetchByKeyword = (searchKeyword,city,sportsName) => async (dispatch) => {
    dispatch({ type: SEARCH_REQUEST });
    try {
        const { data } = await axiosInstance.get(`user/home/api/search?search=${encodeURI(searchKeyword)}&city=${encodeURI(city)}&sportName=${encodeURI(sportsName)}`);
        dispatch({ type: SEARCH_SUCCESS, payload: data });
    } catch (error) {
        dispatchError(dispatch, SEARCH_FAIL, error);
    }
};