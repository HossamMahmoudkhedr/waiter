import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const Card = ({ icon, title, content }) => {
	return (
		<Stack
			direction="row"
			sx={{
				padding: { xs: '1.5rem', lg: '2.25rem' },
				backgroundColor: 'rgba(250,250,250,0.5)',
				border: '1px solid white',
				borderRadius: '2rem',
				gap: '1rem',
				height: '224px',
			}}>
			<Box>
				<Box component="span">{icon}</Box>
			</Box>
			<Stack gap={'0.75rem'}>
				<Typography
					variant="h5"
					sx={{
						fontSize: '1.5rem',
						fontWeight: '500',
						color: 'var(--dark-gray)',
					}}>
					{title}
				</Typography>
				<Typography
					variant="body1"
					sx={{ color: 'var(--gray)' }}>
					{content}
				</Typography>
			</Stack>
		</Stack>
	);
};

export default Card;
