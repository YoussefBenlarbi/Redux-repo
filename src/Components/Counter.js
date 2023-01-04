import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	action_increment,
	action_decrement,
	// action_multiplier,
	// action_diviser,
} from '../Actions/actions';
import { useState } from 'react';

function Counter() {
	const [inputPasInc,setInputPasInc] =useState('');
	const [inputPasDec,setInputPasDec] =useState('');
	const compteur = useSelector((state) => state.count);
	const dispatch = useDispatch();
	function incrementer(pas) {
		dispatch(action_increment(pas));
	}
	function decrement(pas) {
		dispatch(action_decrement(pas));
	}
	// function multiplier() {
	// 	dispatch(action_multiplier());
	// }
	// function diviser() {
	// 	dispatch(action_diviser());
	// }
	return (
		<div>
			<h2>{compteur}</h2>
			<div>Pas d'incrementation <input type="number" value={inputPasInc} onChange={(e)=>setInputPasInc(e.target.value)}/></div>
			<br />
			<button onClick={() => incrementer(inputPasInc)}>Incrementer {inputPasInc}</button>
			<br />
			<br />
			<div>Pas decrementation <input type="number" value={inputPasDec} onChange={(e)=>setInputPasDec(e.target.value)}/></div>
			<br />
			<button onClick={() => decrement(inputPasDec)}>Decrementer  {inputPasDec}</button>
			<br />
			<br />
			{/* <button onClick={() => multiplier()}>Multiplier par 2</button>
			<br />
			<br />
			<button onClick={() => diviser()}>Diviser sur 2</button>
			<br />
			<br /> */}
			<Link to="/AfficherCompteur">Afficher Compteur</Link>
		</div>
	);
}

export default Counter;
