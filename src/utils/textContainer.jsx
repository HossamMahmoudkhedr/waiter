import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Header from './header';
import CustomButton from './customButton';

const TextContainer = ({ title, head, align, text, button, fs, lh }) => {
	return (
		<Stack
			sx={{
				gap: '1.5rem',
				textAlign: { xs: 'center', lg: align || 'right' },
				alignItems: { xs: 'center', lg: align || 'center' },
			}}>
			<Header
				left={false}
				right={false}
				title={title}
				text={head}
				align={align}
				fs={fs}
				lh={lh}
			/>
			<Stack sx={{ alignItems: 'inherit' }}>
				<Typography
					variant="body1"
					sx={{
						color: 'var(--gray)',

						lineHeight: { xs: '1.8' },
					}}>
					{text}
				</Typography>
				{button && (
					<Box sx={{ marginTop: '1.5rem', width: { xs: '100%', md: 'auto' } }}>
						{button}
					</Box>
				)}
			</Stack>
		</Stack>
	);
};

export default TextContainer;
