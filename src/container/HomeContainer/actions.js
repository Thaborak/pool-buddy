export function listIsLoading(bool) {
	return {
		type: "LIST_IS_LOADING",
		isLoading: bool,
	};
}
export function fetchListSuccess(list) {
	return {
		type: "FETCH_LIST_SUCCESS",
		list,
	};
}

export function setGallonsSuccess(value) {
	return {
		type: "SET_GALLONS_SUCCESS",
		value,
	};
}


export function setPhSuccess(value) {
	return {
		type: "SET_PH_SUCCESS",
		value
	}
};

export function setChlorineSuccess(value) {
	return {
		type: "SET_CHLORINE_SUCCESS",
		value
	}
};



export function fetchList(url) {
	return dispatch => {
		dispatch(fetchListSuccess(url));
		dispatch(listIsLoading(false));
	};
};

export function setGallons(value) {
	return dispatch => {
		dispatch(setGallonsSuccess(value));
	};
};

export function setPh(value) {
	return dispatch => {
		dispatch(setPhSuccess(value));
	};
}
export function setChlorine(value) {
	return dispatch => {
		dispatch(setChlorineSuccess(value));
	};
}

