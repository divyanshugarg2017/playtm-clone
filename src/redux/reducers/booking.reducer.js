import { BOOKING_HISTORY_FAIL, BOOKING_HISTORY_FETCH, BOOKING_HISTORY_SUCCESS, CLUBS_LIST_FAILS, CLUBS_LIST_FETCH, CLUBS_LIST_SUCCESS, SET_SLOT_IDS, SELECT_SPORT, CONFIRM_SLOT, SELECT_DATE, SELECT_DAY } from "../constants";

const defaultState = {
    isHistoryFetching: false,
    isHistoryFetchDone: false,
    selectedSlotIds:[]
};

const bookingReducer = (state = defaultState, action) => {
    switch (action.type) {
        case BOOKING_HISTORY_FETCH:
            return {
                ...state,
                isHistoryFetching: true,
                isHistoryFetchDone:false,
            };
        case BOOKING_HISTORY_SUCCESS:
            return {
                ...state,
                isHistoryFetching: false,
                isHistoryFetchDone: true,
                history: action.payload,
            };
        case BOOKING_HISTORY_FAIL:
            return {
                ...state,
                isHistoryFetching: false,
                isHistoryFetchDone:false,
                error: action.payload
            };
        case SET_SLOT_IDS:
            return {
                ...state,
                selectedSlotIds: action.payload.selectedSlotIds,
            };
        case CONFIRM_SLOT:
            return {
                ...state,
                preorderId: action.payload.preorderId,
            };
        case SELECT_DATE:
            return {
                ...state,
                selectedDate: action.payload.date,
            };
        case SELECT_DAY:
            return {
                ...state,
                selectedDay: action.payload.day,
            };
        case SELECT_SPORT:
            return {
                ...state,
                selectedSportId:action.payload.sportId,
                selectedSport:action.payload.sport
            };
        default:
            return state;
    }
};

export default bookingReducer;