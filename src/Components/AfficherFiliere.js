import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

function AfficherFiliere() {
	const [filiere, setFiliere] = useState('');
	const list = useSelector((state) => state);
	const listFiliere = list.filter((elm) => elm.filiere == filiere);
	
	return (
		<div>
			<h2>Chercher Stagiaires par nom de filliere :</h2>
			<div>
				Saisir le nom de Filiere :{' '}
				<input
					type="text"
					value={filiere}
					onChange={(e) => setFiliere(e.target.value)}
				/>
			</div>
			<br />
			{listFiliere.length === 0 ? (
				filiere.trim() === '' ? (
					<p>Veuiller Saisir Filliere </p>
				) : listFiliere.length === 0 ? (
					<p>Nom de filliere Incorrect !</p>
				) : (
					''
				)
			) : (
				<table className="Tablo">
					<tr>
						<th>Id :</th>
						<th>Nom :</th>
						<th>Filiere :</th>
					</tr>
					{listFiliere.map((elm) => (
						<tr>
							<td>{elm.id}</td>
							<td>{elm.nom}</td>
							<td>{elm.filiere}</td>
						</tr>
					))}
				</table>
			)}
			<br />
		</div>
	);
}

export default AfficherFiliere;
