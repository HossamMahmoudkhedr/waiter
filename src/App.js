import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import './App.css';
import RootLayout from './pages/rootLayout';
import Home from './components/home';
import Solutions from './components/solutions';
import Order from './components/order';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<RootLayout />}>
			<Route
				index
				element={<Home />}
			/>
			<Route
				path="/solutions"
				element={<Solutions />}
			/>
			<Route
				path="/order"
				element={<Order />}
			/>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
