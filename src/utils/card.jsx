import { Box, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const Card = ({ icon, title, content, index }) => {
	return (
		<Stack
			component={motion.div}
			initial={{ transform: 'scale(0)' }}
			whileInView={{
				transform: 'scale(1)',
			}}
			transition={{
				duration: 1,
				delay: (Math.random() * 5) / 4,
				type: 'spring',
				stiffness: 100,
			}}
			viewport={{ once: true }}
			direction="row"
			sx={{
				padding: { xs: '1.5rem', lg: '2.25rem' },
				backgroundColor: 'var(--light-gray)',
				border: '1px solid --var(--white)',
				borderRadius: '2rem',
				gap: '1rem',
				height: '224px',
				position: 'relative',
				zIndex: '1',
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
