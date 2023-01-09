import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { EDIT_INSCRIPTION_ACTION } from '../Actions/action_inscription';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';

function EditInscription() {
	const navigate =useNavigate();
	// const location = useLocation();
	// const idP = location.state.idP;
	const {idP}=useParams();
	// console.log(idP);
	const list = useSelector((state) => state.find((elm) => elm.id == idP));
	const [modifiedId, setmodifiedId] = useState(list.id);
	const [nom, setNom] = useState(list.nom);
	const [filiere, setFiliere] = useState(list.filiere);
	const dispatch = useDispatch();
	// console.log(list);
	function edit_Inscription(id, inscription) {
		dispatch(EDIT_INSCRIPTION_ACTION(id, inscription));
		navigate('/CRUD');
	}
	const inscription = { id: modifiedId , nom: nom, filiere: filiere };

	return (
		<div>
			<h1>Modifier Stagiaire :</h1>
			<table>
				<tbody>
					<tr>
						<td>id :</td>
						<td>
							{' '}
							<input
								type="number" disabled={true}
								onChange={(e) => setmodifiedId(e.target.value)}
								value={modifiedId}
								
							/>
						</td>
					</tr>
					<tr>
						<td>nom :</td>
						<td>
							{' '}
							<input
								type="text"
								onChange={(e) => setNom(e.target.value)}
								value={nom}
							/>
						</td>
					</tr>
					<tr>
						<td>filiere :</td>
						<td>
							{' '}
							<input
								type="text"
								onChange={(e) => setFiliere(e.target.value)}
								value={filiere}
							/>
							
						</td>
					</tr>
					<tr>
						<td colSpan={2}>
							<button onClick={() => edit_Inscription(idP, inscription)}>
								Modifier Stagiaire{' '}
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

export default EditInscription;
