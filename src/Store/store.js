import {legacy_createStore} from 'redux';
import {inscriptionReducer} from './../Reducers/inscriptionReducer';


// export const store = legacy_createStore(countReducer);
export const store = legacy_createStore(inscriptionReducer);