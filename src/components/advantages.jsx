import { Box, Grid } from '@mui/material';
import React from 'react';
import Header from '../utils/header';
import Card from '../utils/card';
import Gradient from '../utils/gradient';
import { advantages } from '../data/advantagesData';

const Advantages = () => {
	return (
		<Box id="advantages">
			<Box className="container set-padding">
				<Header
					title={'المميزات'}
					text="إكتشف أهم المميزات."
					right={true}
					left={false}
				/>
				<Box sx={{ position: 'relative', marginTop: '2.5rem' }}>
					<Gradient
						gtop="25%"
						gleft="35%"
						ytop="15%"
						yright="50%"
						opacity={1}
					/>
					<Grid
						container
						justifyContent="center"
						spacing={2}>
						{advantages.map((advantage, i) => (
							<Grid
								item
								key={advantage.id}
								lg={4}
								md={6}
								xs={12}>
								<Card
									title={advantage.title}
									content={advantage.content}
									icon={advantage.icon}
									index={i}
								/>
							</Grid>
						))}
					</Grid>
				</Box>
			</Box>
		</Box>
	);
};

export default Advantages;
