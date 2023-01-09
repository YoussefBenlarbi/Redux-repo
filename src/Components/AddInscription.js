import React from 'react';
import { Link } from 'react-router-dom';
import { ADD_INSCRIPTION_ACTION } from '../Actions/action_inscription';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AddInscription() {
	const Inscriptions = useSelector((state) => state);
	const navigate =useNavigate();
	const [id, setId] = useState(Inscriptions.length + 1);
	const [nom, setNom] = useState('');
	const [filiere, setFiliere] = useState('');
	const dispatch = useDispatch();
	function Add_Inscription(payl) {
		dispatch(ADD_INSCRIPTION_ACTION(payl));
		navigate('/CRUD');
	}
	const inscription = { id: id, nom: nom, filiere: filiere };
	return (
		<div>
			<h1>Ajouter Stagiaire :</h1>
			<table>
				<tbody>
					<tr>
						<td>id :</td>
						<td>
							{' '}
							<input type="text" disabled={true} value={id} onChange={(e) => setId(e.target.value)} />
							
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

export default AddInscription;
