import { Provider } from 'react-redux';
import AddInscription from '../Components/AddInscription';
import { store } from '../Store/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CrudStagaires from './../Components/CrudStagaires';
import EditInscription from './../Components/EditInscription';
import AfficherFiliere from './../Components/AfficherFiliere2';
import './../Style/StyleApp.css';


function AppInscription() {
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path="/" element={<AddInscription />} />
					<Route path="/CRUD" element={<CrudStagaires />} />
					<Route path="/modifier/:idP" element={<EditInscription />} />
					<Route path="/AfficherFiliere" element={<AfficherFiliere />} />
					{/* <Route path="/modifier" element={<EditInscription />} /> */}
				</Routes>

				
			</Router>
		</Provider>
	);
}

export default AppInscription;
