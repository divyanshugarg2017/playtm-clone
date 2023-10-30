import { SET_SPORT_ID, SPORTS_FAIL, SPORTS_FETCHING, SPORTS_SUCCESS } from "../constants";

const defaultState = {};

const sportsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SPORTS_FETCHING:
            return {
                isLoading: true
            };
        case SPORTS_SUCCESS:
            return {
                entities: action.payload,
                selectedSportId : action.payload[0].sportsId
            };
        case SPORTS_FAIL:
            return {
                error: true
            };
        case SET_SPORT_ID:
            return {
                ...state,
                selectedSportId:action.payload
            }
        default:
            return state;
    }
};

export default sportsReducer;