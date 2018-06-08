export const SET_GALLONS_SUCCESS = "SET_GALLONS_SUCCESS";
export const setGallonsSuccess = value => ({
    type: SET_GALLONS_SUCCESS,
    value
});

export const SET_PH_SUCCESS = "SET_PH_SUCCESS";
export const setPhSuccess = value => ({
    type: SET_PH_SUCCESS,
    value
});

export const SET_CHLORINE_SUCCESS = "SET_CHLORINE_SUCCESS";
export const setChlorineSuccess = value => ({
    type: SET_CHLORINE_SUCCESS,
    value
});

export const setGallons = value => (dispatch) => {
    return dispatch(setGallonsSuccess(value));
};

export const setPh = value => (dispatch) => {
    return dispatch(setPhSuccess(value));
};

export const setChlorine = value => (dispatch) => {
    return dispatch(setChlorineSuccess(value));
};


