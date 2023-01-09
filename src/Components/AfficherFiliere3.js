import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

function AfficherFiliere() {
	function removeDuplicates(array, attribute) {
		const noDuplicates = [];
		for (const element of array) {
			let found = false;
			for (const noDuplicate of noDuplicates) {
				if (noDuplicate[attribute] === element[attribute]) {
					found = true;
					break;
				}
			}
			if (!found) {
				noDuplicates.push(element);
			}
		}
		return noDuplicates;
	}
	const [filiere, setFiliere] = useState('');
	const list = useSelector((state) => state);
	const Inscriptions = list.filter((elm) => elm.filiere == filiere);
	const ListF = removeDuplicates(
		list.filter((state) => state),
		'filiere'
	);
	// console.log(ListF);

	return (
		<div>
			<h2>Chercher Stagiaires par nom de filliere :</h2>
			<div>
				Saisir le nom de Filiere :{/* {filiere} */}
				<select
					defaultValue="rien"
					onChange={(e) => setFiliere(e.target.value)}
				>
					<option value="rien" disabled={true}>
						Choisir Filiere
					</option>
					{ListF.length !== 0
						? ListF.map((elm) => (
								<option key={elm.id} value={elm.filiere}>
									{elm.filiere}
								</option>
						  ))
						: ''}
				</select>
			</div>
			<br />
			{Inscriptions.length === 0 ? (
				filiere.trim() === '' ? (
					<p style={{ marginLeft: '28px' }}>Veuiller Choisir la Filliere !</p>
				) : (
					''
				)
			) : (
				<table className="Tablo">
					<tbody>
						<tr>
							<th>Id :</th>
							<th>Nom :</th>
							<th>Filiere :</th>
						</tr>
						{Inscriptions.map((elm) => (
							<tr key={elm.id}>
								<td>{elm.id}</td>
								<td>{elm.nom}</td>
								<td>{elm.filiere}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
			<br />
		</div>
	);
}

export default AfficherFiliere;
