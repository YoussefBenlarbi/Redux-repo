const initialState = { count : 0 };
export const countReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return { count: parseInt(state.count) + parseInt(action.payload) };
		case 'DECREMENT':
			return { count: parseInt(state.count) - parseInt(action.payload)};
		// case 'MULTIPLIER':
		// 	return { count: state.count *2};
		// case 'DIVISER':
		// 	return { count: state.count /2};
		default:
			return state;
	}
};
