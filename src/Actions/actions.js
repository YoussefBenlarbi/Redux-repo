// créateur d'action
export function action_increment(pas) {
	return {
		type: 'INCREMENT',
		payload: pas,
	};
}
export function action_decrement(pas) {
	return {
		type: 'DECREMENT',
		payload: pas,
	};
}
// export function action_multiplier() {
// 	return {
// 		type: 'MULTIPLIER',
// 	};
// }
// export function action_diviser() {
// 	return {
// 		type: 'DIVISER',
// 	};
// }
