const initialState = {
	list: [],
	isLoading: true,
	value: [],
	chlorine: [3],
	gallons: [20000],
	ph: [7.2],
};

export default function(state: any = initialState, action: Function) {
	if (action.type === "FETCH_LIST_SUCCESS") {
		return {
			...state,
			list: action.list,
		};
	}
	if (action.type === "LIST_IS_LOADING") {
		return {
			...state,
			isLoading: action.isLoading,
		};
	}
	if (action.type === "SET_GALLONS_SUCCESS") {
		return {
			...state,
			gallons: action.value,
		};
	}
	if (action.type === "SET_PH_SUCCESS") {
		return {
			...state,
			ph: action.value,
		};
	}
	if (action.type === "SET_CHLORINE_SUCCESS") {
		return {
			...state,
			chlorine: action.value,
		};
	}
	return state;
}
