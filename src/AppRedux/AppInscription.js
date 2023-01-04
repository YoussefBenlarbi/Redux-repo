import { Provider } from 'react-redux';
import Add_Inscription from '../Components/Add_Inscription';
import { store } from '../Store/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Crud_Stagaires from './../Components/Crud_Stagaires';
import Edit_Inscription from './../Components/Edit_Inscription';
import AfficherFiliere from './../Components/AfficherFiliere';
import './../Style/StyleApp.css';


function AppInscription() {
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path="/" element={<Add_Inscription />} />
					<Route path="/CRUD" element={<Crud_Stagaires />} />
					<Route path="/modifier/:idP" element={<Edit_Inscription />} />
					<Route path="/AfficherFiliere" element={<AfficherFiliere />} />
					{/* <Route path="/modifier" element={<Edit_Inscription />} /> */}
				</Routes>

				
			</Router>
		</Provider>
	);
}

export default AppInscription;
