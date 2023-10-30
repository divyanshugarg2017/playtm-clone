import { EVENTS_FAILS, EVENTS_FETCH, EVENTS_SUCCESS, EVENT__DETAIL_SUCCESS } from "../constants";
import { SEARCH_SUCCESS } from "../constants/search.constants";

const defaultState = {
    isLoading: false,
    isDone: false,
};

const eventsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case EVENTS_FETCH:
            return {
                isLoading: true,
                isDone:false,
            };
        case EVENTS_SUCCESS:
            return {
                isLoading: false,
                isDone: true,
                data: action.payload,
            };
        case EVENTS_FAILS:
            return {
                isLoading: false,
                isDone:false,
                error: action.payload
            };
        case SEARCH_SUCCESS:
            return {
                ...state,
                data: action.payload.data[0].eventModelList,
            }
        case EVENT__DETAIL_SUCCESS:
            return {
                ...state,
                [action.payload.eventId]: action.payload.data
            }
        default:
            return state;
    }
};

export default eventsReducer;