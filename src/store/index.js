import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import sessionReducer from '../redux/reducers/session.reducer';
import eventsReducer from '../redux/reducers/events.reducer';
import clubsReducer from '../redux/reducers/clubs.reducer';
import bookingReducer from '../redux/reducers/booking.reducer';
import locationsReducer from '../redux/reducers/locations.reducer';
import sportsReducer from '../redux/reducers/sports.reducer';
import bannerReducer from '../redux/reducers/banner.reducer';

const middlewares = [thunk, logger];

const initialState = {
};
const reducer = combineReducers({
    session: sessionReducer,
    events: eventsReducer,
    clubs: clubsReducer,
    booking: bookingReducer,
    locations: locationsReducer,
    sports: sportsReducer,
    banner: bannerReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(...middlewares)),
);

export const getStore = () =>{
    return store.getStore();
};

export default store;