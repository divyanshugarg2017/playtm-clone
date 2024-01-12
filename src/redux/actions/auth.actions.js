import { dispatchError } from "../../utils/actions.utils";
import axiosInstance from "../../utils/axiosInstance";
import { clearCookies } from "../../utils/session.utils";
import Cookies from 'js-cookie';
import { IS_AUTHENTICATED_CHECKING, IS_AUTHENTICATED_CHECK_DONE, MY_INFO_FAIL, MY_INFO_FETCH, MY_INFO_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT, USER_SIGNUP_FAIL, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from "../constants";


export const isAuthenticated = () => async (dispatch) => {
    dispatch({
        type: IS_AUTHENTICATED_CHECKING
    });
    try {
        const { data } = await axiosInstance.get('/user/api/myinfo');
        dispatch({ type: IS_AUTHENTICATED_CHECK_DONE, payload: data.data });
    } catch (error) {
        dispatchError(dispatch, IS_AUTHENTICATED_CHECK_DONE, error);
    }
};

export const signup = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNUP_REQUEST, payload: { email, password } });
    try {
        const { data } = await axiosInstance.post('/user/api/signup', { mobile:email, password });
        dispatch({ type: USER_SIGNUP_SUCCESS, payload: data.data });
    } catch (error) {
        dispatch({
            type: USER_SIGNUP_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
    try {
        const { data } = await axiosInstance.post('/user/api/login', { mobile: email, password },);   
        console.log(data.data.accessToken,"this is login data")   
        localStorage.setItem("accesstoken",data.data.accessToken)  
        if (data.statusCode!==1){
            dispatch({
                type: USER_SIGNIN_FAIL,
                payload: data.msg
            });
        }else{
            dispatch({ type: USER_SIGNIN_SUCCESS, payload: data.data });
        }
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const getMyInfo = () => async (dispatch) => {
    dispatch({ type:MY_INFO_FETCH });
    try {
        const { data } = await axiosInstance.get('/user/api/myinfo');
        dispatch({ type: MY_INFO_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: MY_INFO_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
};

export const signOut = () => async (dispatch) => {
    clearCookies();
    try {
        await axiosInstance.post('/user/api/logout');
        dispatch({ type: USER_SIGNOUT });
    } catch (error) {
        throw(error);
    }
    
};