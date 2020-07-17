const quoteReducer = (state = null, action) => {
	switch (action.type) {
		case "FETCH_QUOTE":
			return action.payload;
		default:
			return state;
	}
};

export default quoteReducer;
