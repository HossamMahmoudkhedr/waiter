import { Box, Typography } from '@mui/material';
import React from 'react';
import { icons } from './icons';

const Heading = ({ text, left, right, fs, lh }) => {
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
						fontSize: {
							xs: fs ? `calc(${fs} - 1rem)` : '1.75rem',
							md: fs || '2.25rem',
							lg: '3rem',
						},
						fontWeight: '500',
						lineHeight: { xs: '42px', md: lh || '42px', lg: '56px' },
					}}>
					{text}
				</Typography>

				{right && (
					<Box
						component="span"
						sx={{
							display: { xs: 'none', md: 'block' },
							position: 'absolute',
							left: { md: text === 'أبرز الأسئلة الشائعة' ? '-70px' : 'unset' },
							right: {
								md: text !== 'أبرز الأسئلة الشائعة' ? '-58px' : 'unset',
								lg: '-58px',
							},
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
