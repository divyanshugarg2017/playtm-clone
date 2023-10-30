import axiosInstance from "../../utils/axiosInstance";
import { BOOKING_HISTORY_FAIL, BOOKING_HISTORY_FETCH, BOOKING_HISTORY_SUCCESS, SET_SLOT_IDS, CONFIRM_SLOT, SELECT_DATE, SELECT_DAY, SELECT_SPORT } from "../constants";

export const fetchBookingHistory = () => async (dispatch) => {
    dispatch({ type: BOOKING_HISTORY_FETCH });
    try {
        const { data } = await axiosInstance.get(`/customer/api/v1/slotBooking/history`);
        dispatch({ type: BOOKING_HISTORY_SUCCESS, payload: data.data });
    } catch (error) {
        dispatch({
            type: BOOKING_HISTORY_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const proceedToBooking = (selectedSlotIds) => (dispatch) => {
    dispatch({
        type: SET_SLOT_IDS,
        payload: {
            selectedSlotIds
        }
    })
};

export const selectSport = (sportId,sport) => (dispatch) => {
    dispatch({
        type: SELECT_SPORT,
        payload: { sportId, sport }
    })
};

export const setBookedPreOrderId = (preorderId) => (dispatch) => {
    dispatch({
        type: CONFIRM_SLOT,
        payload: { preorderId }
    })
};

export const setselectedDate = (date) => (dispatch) => {
    dispatch({
        type: SELECT_DATE,
        payload: { date }
    })
};

export const setselectedDay = (day) => (dispatch) => {
    dispatch({
        type: SELECT_DAY,
        payload: { day }
    })
};