import React from 'react';
import { Link } from 'react-router-dom';
import { ADD_INSCRIPTION_ACTION } from '../Actions/action_inscription';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Add_Inscription() {
	const [id, setId] = useState('');
	const [nom, setNom] = useState('');
	const [filiere, setFiliere] = useState('');
	const dispatch = useDispatch();
	function Add_Inscription(payl) {
		dispatch(ADD_INSCRIPTION_ACTION(payl));
	}
	const inscription = { id: id, nom: nom, filiere: filiere };
	return (
		<div>
			<table>
				<tbody>
					<tr>
						<td>id :</td>
						<td>
							{' '}
							<input type="text" onChange={(e) => setId(e.target.value)} />
							
						</td>
					</tr>
					<tr>
						<td>nom :</td>
						<td>
							{' '}
							<input type="text" onChange={(e) => setNom(e.target.value)} />
							
						</td>
					</tr>
					<tr>
						<td>filiere :</td>
						<td>
							{' '}
							<input type="text" onChange={(e) => setFiliere(e.target.value)} />
							
						</td>
					</tr>
					<tr>
						<td colSpan={2}>
							<button onClick={() => Add_Inscription(inscription)}>
								Ajouter Stagiaire{' '}
							</button>
						</td>
					</tr>
					<tr>
						<td colSpan={2}>
							<Link to="/CRUD">CRUD</Link>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Add_Inscription;
