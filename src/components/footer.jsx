import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
	return (
		<Stack
			component="footer"
			className="container"
			sx={{ alignItems: 'center', padding: '2.5rem 0', gap: '1.5rem' }}>
			<Box width="112px">
				<img
					width={'100%'}
					src={require('../assets/images/logo11.png')}
					alt="Waiter"
				/>
			</Box>
			<Stack
				component="ul"
				direction={{ xs: 'column', lg: 'row' }}
				sx={{ fontWeight: '500', gap: '2rem', alignItems: 'center' }}>
				<li>
					<NavLink>تواصل معنا</NavLink>
				</li>
				<li>
					<NavLink to="/order">طريقة الطلب</NavLink>
				</li>
				<li>
					<a href="#prices">الأسعار</a>
				</li>
				<li>
					<NavLink to="/solutions">الحلول</NavLink>
				</li>
				<li>
					<NavLink to="/">الرئيسية</NavLink>
				</li>
			</Stack>

			<Box
				component="span"
				sx={{
					backgroundColor: 'var(--very-light-gray)',
					height: '1px',
					width: '100%',
				}}></Box>

			<Typography
				variant="body1"
				sx={{ fontWeight: '500', color: 'var(--gray)' }}>
				جميع الحقوق محفوظة لشركة ويتر © 2023
			</Typography>
		</Stack>
	);
};

export default Footer;
