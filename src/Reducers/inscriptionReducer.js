import {
	ADD_INSCRIPTION,
	REMOVE_INSCRIPTION,
	EDIT_INSCRIPTION,
} from './../Actions/action_inscription';
const initialState = [
	{ id: 1, nom: 'Hidar', filiere: 'FUS' },
	{ id: 2, nom: 'Idrissi', filiere: 'RESEAU' },
	{ id: 3, nom: 'Mohamed', filiere: 'WFS' },
	{ id: 4, nom: 'Ahmed', filiere: 'CYBER SECURITE' },
	{ id: 5, nom: 'Salah', filiere: 'FUS' },
	{ id: 6, nom: 'Karim', filiere: 'RESEAU' },
	{ id: 7, nom: 'Fatima', filiere: 'CYBER SECURITE' },
	{ id: 8, nom: 'Sami', filiere: 'WFS' },
];
export const inscriptionReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_INSCRIPTION:
			return [...state, action.payload];
		case REMOVE_INSCRIPTION:
			return state.filter((elm) => elm.id !== action.payload);
		case EDIT_INSCRIPTION:
			// const newState = [...state.filter(elm=>elm.id != action.payload.id)];
			// newState.filter(elm=>elm.id !== action.payload.id);
			// return [...newState,action.payload.inscription];
			const ArrayF = state.find((elm) => elm.id == action.payload.id);
			ArrayF.nom = action.payload.inscription.nom;
			ArrayF.filiere = action.payload.inscription.filiere;
			return state;
		default:
			return state;
	}
};
