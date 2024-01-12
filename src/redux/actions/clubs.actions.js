import axiosInstance from "../../utils/axiosInstance";
import { CLUBS_LIST_FAILS, CLUBS_LIST_FETCH, CLUBS_LIST_SUCCESS, CLUB_DETAIL_FAILS, CLUB_DETAIL_FETCH, CLUB_DETAIL_SUCCESS } from "../constants";


export const fetchAllClubs = () => async (dispatch) => {
    dispatch({ type: CLUBS_LIST_FETCH});
    try {
        const { data } = await axiosInstance.get('/user/page/listOfClubs');
        console.log(data,"cluuuuuuuuuuuuuuub liiiiiiiiiiiiiiiist daaaaaaaaaaaaaaaaata")
        dispatch({ type: CLUBS_LIST_SUCCESS, payload: data.data });
    } catch (error) {
        dispatch({
            type: CLUBS_LIST_FAILS,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const fetchClubDetail = (clubId) => async (dispatch) => {
    dispatch({ type: CLUB_DETAIL_FETCH });
    try {
        const { data } = await axiosInstance.get(`/user/page/clubDetails?clubId=${clubId}`);
        dispatch({ type: CLUB_DETAIL_SUCCESS, payload: { data:data.data[0],clubId} });
    } catch (error) {
        dispatch({
            type: CLUB_DETAIL_FAILS,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};