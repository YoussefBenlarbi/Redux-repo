import {legacy_createStore} from 'redux';
// import {countReducer} from './../Reducers/countReducer';
import {inscriptionReducer} from './../Reducers/inscriptionReducer';


// export const store = legacy_createStore(countReducer);
export const store = legacy_createStore(inscriptionReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 
