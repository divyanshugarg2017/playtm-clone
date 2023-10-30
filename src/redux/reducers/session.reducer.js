import { IS_AUTHENTICATED_CHECKING, IS_AUTHENTICATED_CHECK_DONE, MY_INFO_FAIL, MY_INFO_FETCH, MY_INFO_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT, USER_SIGNUP_FAIL, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from "../constants/session.constants";

const defaultState = {
    isAuthenticated:null,
    isCheckingAuth:true,
};

const sessionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case IS_AUTHENTICATED_CHECKING:
            return {
                isAuthenticated: null,
                isCheckingAuth:true,
            };
        case IS_AUTHENTICATED_CHECK_DONE:
            return {
                isAuthenticated: ( action.payload && action.payload.pvId ) ? true : false,
                userInfo: {
                    loading: false,
                    fetchDone: true,
                    error: !action.payload.pvId,
                    ...action.payload
                }
            };
        case USER_SIGNUP_REQUEST:
            return {
                isSigningUp:true
            };
        case USER_SIGNUP_SUCCESS:
            return {
                isSigningUpSuccess: true
            };
        case USER_SIGNUP_FAIL:
            return {
                isSigningUpFail: true
            };
        case USER_SIGNIN_REQUEST:
            return {
                isAuthenticated: false,
                isSigningIn:true
            }
        case USER_SIGNIN_SUCCESS:
            return { 
                isAuthenticated: true,
                isSigningIn: false,
                refreshToken: action.payload.refreshToken, 
                accessToken: action.payload.accessToken 
            };
        case USER_SIGNIN_FAIL:
            return {
                isAuthenticated: false, 
                error: action.payload ,
                isSigningIn: false
            };
        case USER_SIGNOUT:
            return { isAuthenticated: false };
        case MY_INFO_FETCH:
            return {
                ...state,
                userInfo: {
                    loading: true,
                    fetchDone: false,
                    error:false,
                }
            };
        case MY_INFO_SUCCESS:
            return {
                ...state,
                userInfo:{
                    loading:false,
                    fetchDone:true,
                    error: false,
                    ...action.payload
                }
            };
        case MY_INFO_FAIL:
            return {
                isAuthenticated:false,
                userInfo: {
                    loading: false,
                    fetchDone: true,
                    error: action.payload,
                }
            };
        default:
            return state;
    }
};

export default sessionReducer;