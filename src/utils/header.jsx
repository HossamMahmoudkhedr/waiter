import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Heading from './heading';
import { icons } from './icons';

const Header = ({ text, title, left, right }) => {
	return (
		<Stack sx={{ alignItems: 'center', gap: '0.5rem', position: 'relative' }}>
			{left && (
				<Box
					component="span"
					sx={{
						display: { xs: 'none', md: 'block' },
						position: 'absolute',
						right: { md: '-240px', lg: '-145px', xl: '-65px' },
						top: { md: '-35px', lg: '10px' },
					}}>
					{icons.dottedLine}
				</Box>
			)}
			<Typography
				variant="h2"
				sx={{ color: 'var(--gray)', fontSize: '0.875rem', fontWeight: '500' }}>
				{title}
			</Typography>
			<Heading
				text={text}
				left={left}
				right={right}
			/>
			{right && (
				<Box
					component="span"
					sx={{
						display: { xs: 'none', md: 'block' },
						position: 'absolute',
						left: { md: '-243px', lg: '-167px', xl: '-87px' },
						top: { md: '-110px', lg: '-146px' },
						transform: {
							md: 'rotateY(180deg) rotateZ(-24deg) scale(0.84)',
							lg: 'rotateY(180deg) rotateZ(-30deg)',
						},
					}}>
					{icons.dottedLine}
				</Box>
			)}
		</Stack>
	);
};

export default Header;
