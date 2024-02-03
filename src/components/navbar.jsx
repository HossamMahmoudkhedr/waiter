import { Box, Stack } from '@mui/material';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CustomButton from '../utils/customButton';
import styled from 'styled-components';
import { icons } from '../utils/icons';

const StyledLI = styled.li`
	& a {
		font-size: 12px;
	}

	@media (max-width: 1024px) {
		& a {
			font-size: 1.5rem;
			font-weight: 500;
			color: var(--dark-gray);
		}
		& {
			padding: 1rem 0;
		}
		&:not(.last) {
			border-bottom: 1px solid var(--very-light-gray);
		}
	}
`;

const Navbar = () => {
	const [opened, setOpened] = useState(false);
	const handleMenu = () => {
		setOpened(!opened);
	};
	const handleNavClick = () => {
		setOpened(false);
	};
	return (
		<Box className="container">
			<Stack
				component="nav"
				direction="row"
				sx={{
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: { xs: '1rem 0.5rem', lg: '1rem 0rem' },
					height: { xs: opened ? '148px' : 'auto', lg: 'auto' },
				}}>
				<Box
					sx={{
						padding: '29px 3px',
						right: { xs: '1.35rem', lg: 'unset' },
						top: { xs: '1rem', lg: 'unset' },
						position: opened ? 'fixed' : 'unset',
						zIndex: { xs: '9', lg: 'unset' },
						width: '112px',
					}}>
					<Link
						to={'/'}
						style={{ width: '100%' }}>
						<img
							width={'100%'}
							src={require('../assets/images/logo11.png')}
							alt="WAITER"
						/>
					</Link>
				</Box>
				<Stack
					direction={{ xs: 'column', lg: 'row' }}
					sx={{
						position: { xs: 'fixed', lg: 'unset' },
						justifyContent: { xs: 'center', lg: 'space-between' },
						padding: { xs: '0 1rem', lg: 'unset' },
						backgroundColor: { xs: 'white', lg: 'unset' },
						width: { xs: '100%', lg: '76%' },
						height: { xs: '100vh', lg: 'unset' },
						top: { xs: '0', lg: 'unset' },
						right: { xs: opened ? 0 : '-100%', lg: 'unset' },
						zIndex: 2,
						gap: { xs: '2rem', lg: 'unset' },
						transition: { xs: 'all 0.3s ease-in', lg: 'unset' },
					}}>
					<Stack
						component="ul"
						direction={{ xs: 'column', lg: 'row' }}
						sx={{
							backgroundColor: { xs: 'unset', lg: 'var(--light-gray)' },
							gap: { xs: 'unset', lg: '2rem' },
							padding: '1.25rem 1.5rem',
							borderRadius: { xs: 'unset', lg: '5rem' },
							border: { xs: 'unset', lg: '1px solid white' },
						}}>
						<StyledLI>
							<NavLink
								onClick={handleNavClick}
								to="/">
								الرئيسية
							</NavLink>
						</StyledLI>
						<StyledLI>
							<NavLink
								onClick={handleNavClick}
								to="/solutions">
								الحلول
							</NavLink>
						</StyledLI>
						<StyledLI>
							<a href="/#prices">الاسعار</a>
						</StyledLI>
						<StyledLI>
							<a href="/#advantages">المميزات</a>
						</StyledLI>
						<StyledLI>
							<NavLink
								onClick={handleNavClick}
								to="/order">
								طريقة الطلب
							</NavLink>
						</StyledLI>
						<StyledLI className="last">
							<a href="#questions">الأسئلة الشائعة</a>
						</StyledLI>
					</Stack>
					<Stack
						direction={{ xs: 'column', lg: 'row' }}
						sx={{ gap: '1rem', alignItems: { xs: 'unset', lg: 'center' } }}>
						<CustomButton
							text="حساب جديد"
							textcolor="var(--dark-gray)"
							bgcolor="transparent"
							paddingsize="0.625rem 1rem"
							fs="14px"
						/>
						<CustomButton
							text="تسجيل الدخول"
							textcolor="white"
							bgcolor="var(--blue)"
							paddingsize="0.625rem 1rem"
							fs="14px"
						/>
					</Stack>
				</Stack>
				<Stack
					onClick={handleMenu}
					sx={{
						display: { xs: 'flex', lg: 'none' },
						width: '48px',
						height: '48px',
						borderRadius: '50%',
						background: 'var(--light-gray)',
						border: `1px solid ${opened ? 'var(--very-light-gray)' : 'white'}`,
						justifyContent: 'center',
						alignItems: 'center',
						cursor: 'pointer',
						zIndex: 9,
						left: { xs: '1.2rem', lg: 'unset' },
						top: { xs: '3rem', lg: 'unset' },
						position: opened ? 'fixed' : 'unset',
					}}>
					{!opened && icons.menu}
					{opened && icons.close}
				</Stack>
			</Stack>
		</Box>
	);
};

export default Navbar;
