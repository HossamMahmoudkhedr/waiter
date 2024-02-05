import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggler from '../utils/themeToggler';

const Footer = ({ setTheme }) => {
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
					<a href="/order">طريقة الطلب</a>
				</li>
				<li>
					<a href="/">الأسعار</a>
				</li>
				<li>
					<a href="/solutions">الحلول</a>
				</li>
				<li>
					<a href="/">الرئيسية</a>
				</li>
			</Stack>

			<Box
				component="span"
				sx={{
					backgroundColor: 'var(--very-light-gray)',
					height: '1px',
					width: '100%',
				}}></Box>
			<ThemeToggler setTheme={setTheme} />
			<Typography
				variant="body1"
				sx={{ fontWeight: '500', color: 'var(--gray)' }}>
				جميع الحقوق محفوظة لشركة ويتر © 2023
			</Typography>
		</Stack>
	);
};

export default Footer;
