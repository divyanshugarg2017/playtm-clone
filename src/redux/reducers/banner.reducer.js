import { BANNER_FAIL, BANNER_FETCHING, BANNER_SUCCESS } from "../constants";

const defaultState = {};

const bannerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case BANNER_FETCHING:
            return {
                isLoading: true
            };
        case BANNER_SUCCESS:
            return {
                data: action.payload,
            };
        case BANNER_FAIL:
            return {
                error: true
            };
        default:
            return state;
    }
};

export default bannerReducer;