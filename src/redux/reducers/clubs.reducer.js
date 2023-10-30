import { CLUBS_LIST_FAILS, CLUBS_LIST_FETCH, CLUBS_LIST_SUCCESS, CLUB_DETAIL_FETCH, CLUB_DETAIL_SUCCESS } from "../constants";
import { SEARCH_SUCCESS } from "../constants/search.constants";

const defaultState = {
    isLoading: false,
    isDone: false,
};

const clubsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CLUBS_LIST_FETCH:
            return {
                isLoading: true,
                isDone:false,
            };
        case CLUBS_LIST_SUCCESS:
            return {
                isLoading: false,
                isDone: true,
                data: action.payload,
            };
        case CLUBS_LIST_FAILS:
            return {
                isLoading: false,
                isDone:false,
                error: action.payload
            };
        case CLUB_DETAIL_SUCCESS:
            return {
                ...state,
                [action.payload.clubId]:action.payload.data
            }
        case SEARCH_SUCCESS:
            return {
                ...state,
                data: action.payload.data[0].customerEntityList,
            }
        default:
            return state;
    }
};

export default clubsReducer;