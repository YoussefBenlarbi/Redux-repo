export const ADD_INSCRIPTION = 'ADD_INSCRIPTION';
export const REMOVE_INSCRIPTION = 'REMOVE_INSCRIPTION';
export const EDIT_INSCRIPTION = 'EDIT_INSCRIPTION';
export function ADD_INSCRIPTION_ACTION(inscription) {
	return {
		type: ADD_INSCRIPTION,
		payload: inscription,
	};
}

export function REMOVE_INSCRIPTION_ACTION(id) {
	return {
		type: REMOVE_INSCRIPTION,
		payload: id,
	};
}

export function EDIT_INSCRIPTION_ACTION(id,inscription) {
	return {
		type: EDIT_INSCRIPTION,
		payload: {id:id,inscription:inscription},
	};
}
