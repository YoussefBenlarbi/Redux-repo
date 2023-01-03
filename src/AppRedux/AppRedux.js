import { Provider } from 'react-redux';
import Counter from '../Components/Counter';
import { store } from '../Store/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Afficher from './../Components/Afficher';

function AppRedux() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Counter />} />
					<Route path="/AfficherCompteur" element={<Afficher />} />
				</Routes>

				
			</BrowserRouter>
		</Provider>
	);
}

export default AppRedux;
