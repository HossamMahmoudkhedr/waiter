import { Box, Typography } from '@mui/material';
import React from 'react';
import { icons } from './icons';

const Heading = ({ text, left, right }) => {
	return (
		<Box>
			<Box
				sx={{
					position: 'relative',
					width: 'fit-content',
				}}>
				{left && (
					<Box
						component="span"
						sx={{
							display: { xs: 'none', md: 'block' },
							position: 'absolute',
							left: '-55px',
							top: '-60px',
						}}>
						{icons.star}
					</Box>
				)}

				<Typography
					variant="h3"
					sx={{
						fontSize: { xs: '1.75rem', lg: '3rem' },
						fontWeight: '500',
						lineHeight: '56px',
					}}>
					{text}
				</Typography>

				{right && (
					<Box
						component="span"
						sx={{
							display: { xs: 'none', md: 'block' },
							position: 'absolute',
							right: '-58px',
							top: '-74px',
						}}>
						{icons.star}
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default Heading;
