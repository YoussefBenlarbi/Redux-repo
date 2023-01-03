import { useSelector } from 'react-redux';
import {  Link } from 'react-router-dom';


function Afficher() {
	const compteur = useSelector((state) => state.count);
	return (
		<div>
			<h1>Valeur du compteur : {compteur}</h1>    
            <Link to="/">Retour Compteur </Link>
		</div>
	);
}
export default Afficher;
