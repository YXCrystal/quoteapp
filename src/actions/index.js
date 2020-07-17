import quote from "../apis/quotes";

export const fetchQuote = () => {
	const randomNum = Math.floor(Math.random() * 1643) + 1;
	return async dispatch => {
		const response = await quote.get("/quotes");

		dispatch({ type: "FETCH_QUOTE", payload: response.data[randomNum] });
	};
};
