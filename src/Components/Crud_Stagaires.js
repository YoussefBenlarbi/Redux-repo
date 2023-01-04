import React from 'react';
import { useSelector } from 'react-redux';
import { REMOVE_INSCRIPTION_ACTION } from '../Actions/action_inscription';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Crud_Stagaires() {
	const dispatch = useDispatch();
	// const navigate = useNavigate();
	function remove_Inscription(id) {
		dispatch(REMOVE_INSCRIPTION_ACTION(id));
	}

	// function ClickEdit(id) {
	// 	navigate.push('/modifier', { state: { id: id } });
	// alert('Hello Edit !!');
	// }

	const list = useSelector((state) => state);
	var index = list.length;
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
							<tr key={index++}>
								<td>{elm.id}</td>
								<td>{elm.nom}</td>
								<td>{elm.filiere}</td>
								<td>
									<button onClick={() => remove_Inscription(elm.id)}>
										Supprimer
									</button>

									<Link
										//  to={`/modifier`}
										to={`/modifier/${elm.id}`}
										// state={{ idP: elm.id }}
									>
										<button
										// onClick={() => ClickEdit(elm.id)}
										>
											Edit Stagiaire
										</button>
									</Link>
								</td>
							</tr>
						))
					)}
				</tbody>
			</table>
			<div>{`Nombre d'inscrit : ${list.length}`}</div>

			<Link to="/ ">Add inscription</Link>
			<br />
			<br />
			<Link to="/AfficherFiliere">
				<button>
						Afficher par Filiere
				</button>
			</Link>
		</div>
	);
}

export default Crud_Stagaires;
