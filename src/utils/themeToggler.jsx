import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { icons } from './icons';
import { ThemeContext } from '../pages/rootLayout';

const ThemeToggler = ({ setTheme }) => {
	const themeContext = useContext(ThemeContext);

	const toggleTheme = () => {
		if (themeContext === 'light') {
			setTheme('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			setTheme('light');
			localStorage.setItem('theme', 'light');
		}
	};

	return (
		<Box
			onClick={toggleTheme}
			sx={{
				width: '56px',
				border: '1px solid var(--very-light-gray)',
				borderRadius: '2rem',
				padding: '4px',
				cursor: 'pointer',
				position: 'relative',
			}}>
			<Box
				sx={{
					position: 'absolute',
					left: '7.2px',
					top: '6.5px',
					zIndex: '2',
					stroke: themeContext === 'dark' ? 'white' : 'black',
				}}>
				{icons.moon}
			</Box>
			<Box
				sx={{
					position: 'absolute',
					right: '7.3px',
					top: '6.5px',
					zIndex: '2',
				}}>
				{icons.sun}
			</Box>
			<Box
				component="span"
				sx={{
					width: '24px',
					height: '24px',
					borderRadius: '50%',
					backgroundColor: 'var(--blue)',
					display: 'block',
					transform: `${
						themeContext === 'dark' ? 'translateX(-97%)' : 'translateX(0)'
					}`,
					transition: 'all 0.2s ease-in',
				}}></Box>
		</Box>
	);
};

export default ThemeToggler;
