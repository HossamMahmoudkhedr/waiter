import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
export const ThemeContext = createContext(null);
const RootLayout = () => {
	const [theme, setTheme] = useState('light');
	useEffect(() => {
		const item = localStorage.getItem('theme');
		if (item) {
			setTheme(item);
		}
	}, []);
	return (
		<ThemeContext.Provider value={theme}>
			<div
				className="App"
				data-theme={theme}>
				<Navbar />
				<Outlet />
				<Footer setTheme={setTheme} />
			</div>
		</ThemeContext.Provider>
	);
};

export default RootLayout;
