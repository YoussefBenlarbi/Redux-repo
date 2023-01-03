import React from 'react';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	action_increment,
	action_decrement,
	// action_multiplier,
	// action_diviser,
} from '../Actions/actions';

function Counter() {
	// const compteur = useSelector((state) => state.count);
	const dispatch = useDispatch();
	function incrementer() {
		dispatch(action_increment());
	}
	function decrement() {
		dispatch(action_decrement());
	}
	// function multiplier() {
	// 	dispatch(action_multiplier());
	// }
	// function diviser() {
	// 	dispatch(action_diviser());
	// }
	return (
		<div>
			{/* <h2>{compteur}</h2> */}
			<button onClick={() => incrementer()}>Incrementer</button>
			<br />
			<br />
			<button onClick={() => decrement()}>Decrementer</button>
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
