import React from 'react';
import { useSelector } from 'react-redux';
import {
	REMOVE_INSCRIPTION_ACTION,
	EDIT_INSCRIPTION_ACTION,
} from '../Actions/action_inscription';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
function Crud_Stagaires() {
	const dispatch = useDispatch();
	function remove_Inscription(id) {
		dispatch(REMOVE_INSCRIPTION_ACTION(id));
	}
	function edit_Inscription(id) {
		dispatch(EDIT_INSCRIPTION_ACTION(id));
	}
	const list = useSelector((state) => state);
	return (
		<div>
			<h1>CRUD Stagiaires </h1>
			<table className="Tablo">
				<tbody>
					<tr>
						<th>Id :</th>
						<th>Nom :</th>
						<th>Filiere :</th>
						<th>Operation :</th>
					</tr>
					{list.length === 0 ? (
						<tr>
							{' '}
							<td colSpan={4}>Array is Empty</td>{' '}
						</tr>
					) : (
						list.map((elm) => (
							<tr key={elm.id}>
								<td>{elm.id}</td>
								<td>{elm.nom}</td>
								<td>{elm.filiere}</td>
								<td>
									<button onClick={() => remove_Inscription(elm.id)}>
										Supprimer
									</button>
									<button onClick={() => edit_Inscription(elm.id)}>
										Edit 
									</button>
								</td>
							</tr>
						))
					)}
				</tbody>
			</table>

			<Link to="/ ">Add inscription</Link>
		</div>
	);
}

export default Crud_Stagaires;
