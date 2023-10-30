export const dispatchError = (dispatch,type,error) => {
    dispatch({
        type,
        payload:
            error.response && error.response.data && error.response.data.message
                ? error.response.data.message
                : error.message,
    });
};