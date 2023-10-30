import { dispatchError } from "../../utils/actions.utils";
import axiosInstance from "../../utils/axiosInstance";
import { EVENTS_FAILS, EVENTS_FETCH, EVENTS_SUCCESS, EVENT__DETAIL_FAILS, EVENT__DETAIL_FETCH, EVENT__DETAIL_SUCCESS } from "../constants";


export const fetchAllEvents = () => async (dispatch) => {
    dispatch({ type: EVENTS_FETCH});
    try {
        const { data } = await axiosInstance.get('/club/page/listOfEvents');
        dispatch({ type: EVENTS_SUCCESS, payload: data.data });
    } catch (error) {
        dispatch({
            type: EVENTS_FAILS,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const fetchEventDetail = (eventId) => async (dispatch) => {
    dispatch({ type: EVENT__DETAIL_FETCH });
    try {
        const { data } = await axiosInstance.get(`/club/page/eventDetails?id=${eventId}`);
        dispatch({ type: EVENT__DETAIL_SUCCESS, payload: { data: data.data, eventId } });
    } catch (error) {
        dispatchError(dispatch, EVENT__DETAIL_FAILS,error);
    }
};