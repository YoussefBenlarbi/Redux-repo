import { Provider } from 'react-redux';
import Add_Inscription from '../Components/Add_Inscription';
import { store } from '../Store/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Crud_Stagaires from './../Components/Crud_Stagaires';
import './../Style/StyleApp.css';


function AppInscription() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Add_Inscription />} />
					<Route path="/CRUD" element={<Crud_Stagaires />} />
				</Routes>

				
			</BrowserRouter>
		</Provider>
	);
}

export default AppInscription;
