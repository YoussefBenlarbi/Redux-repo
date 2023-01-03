const initialState = { count: 0 };
export const countReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return { count: state.count + 1 };
		case 'DECREMENT':
			return { count: state.count - 1 };
		case 'MULTIPLIER':
			return { count: state.count *2};
		case 'DIVISER':
			return { count: state.count /2};
		default:
			return state;
	}
};
