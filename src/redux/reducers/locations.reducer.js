import { LOCATIONS_FAIL, LOCATIONS_FETCHING, LOCATIONS_SUCCESS, SET_LOCATION } from "../constants";

const defaultState = {
};

const locationsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOCATIONS_FETCHING:
            return {
                isLoading: true
            };
        case LOCATIONS_SUCCESS:
            const entities = (action.payload && action.payload.length) ? action.payload.filter((city) => {
                if (city) {
                    return city;
                }
            }) : [];
            return {
                entities,
                selectedLocation: entities[0]
            };
        case LOCATIONS_FAIL:
            return {
                error: true
            };
        case SET_LOCATION:
            return {
                ...state,
                selectedLocation: action.payload
            };
        default:
            return state;
    }
};

export default locationsReducer;