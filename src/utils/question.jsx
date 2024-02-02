import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { icons } from './icons';

const Question = ({ question, answer, opened }) => {
	return (
		<Stack>
			<Stack
				direction="row"
				sx={{ justifyContent: 'space-between' }}>
				<Typography
					variant="h5"
					sx={{
						fontSize: { xs: '1.25rem', lg: '1.5rem' },
						fontWeight: '500',
						color: 'var(--dark-gray)',
					}}>
					{question}
				</Typography>
				<Box component="span">
					{!opened && icons.plus}
					{opened && icons.minus}
				</Box>
			</Stack>
			<Typography
				variant="body1"
				sx={{
					fontWeight: '500',
					color: 'var(--gray)',
					width: '70%',
					maxHeight: opened ? '200px' : '0px',
					height: opened ? 'auto' : 'unset',
					overflow: 'hidden',
					transition: 'all 0.3s ease-out',
				}}>
				{answer}
			</Typography>
		</Stack>
	);
};

export default Question;
