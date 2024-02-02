import React from 'react';
import Hero from './hero';
import Gradient from '../utils/gradient';
import Packages from './packages';
import Advantages from './advantages';
import Questions from './questions';
import { Box } from '@mui/material';

const Home = () => {
	return (
		<Box sx={{ overflow: 'hidden' }}>
			<Gradient
				gtop="-30%"
				gleft="40%"
				ytop="-30%"
				yright="45%"
			/>
			<Hero />
			<Packages />
			<Advantages />
			<Questions />
		</Box>
	);
};

export default Home;
