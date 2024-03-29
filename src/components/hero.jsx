import { Box, Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';
import CustomButton from '../utils/customButton';
import { icons } from '../utils/icons';
import Comment from '../utils/comment';
import { ThemeContext } from '../pages/rootLayout';
import { motion } from 'framer-motion';

const Hero = () => {
	const themeContext = useContext(ThemeContext);
	return (
		<Stack
			sx={{
				gap: { xs: '3.125rem', md: '8rem', lg: '3.5rem' },
				marginBottom: { xs: '0', lg: '9.8rem' },
			}}>
			<Stack
				className="container"
				sx={{
					alignItems: 'center',
					textAlign: 'center',
					gap: '2rem',
					marginTop: '4rem',
					marginBottom: '5rem',
					color: 'var(--black)',
				}}>
				<Box
					sx={{
						width: { xs: '100%', lg: '60%' },
						position: 'relative',
					}}>
					<Box
						component={motion.span}
						initial={{ transform: 'scale(0)' }}
						whileInView={{ transform: 'scale(1)' }}
						transition={{ duration: 1, type: 'spring' }}
						viewport={{ once: true }}
						sx={{
							display: { xs: 'none', md: 'block' },
							position: 'absolute',
							right: { md: '-33px', lg: '-28px' },
							top: { md: '-64px', lg: '-63px' },
						}}>
						{icons.star}
					</Box>
					<Typography
						variant="h1"
						sx={{
							fontSize: { xs: '2rem', md: '3.5rem', lg: '4rem' },
							fontWeight: '600',
							lineHeight: { xs: '40px', md: '70px', lg: 'normal' },
						}}>
						أيًا كان نشاطك، مطعم ، كوفي ، سوبر ماركت تطبيقك جاهز خلال 48 ساعة !
					</Typography>
					<Box
						component={motion.span}
						initial={{ transform: 'scale(0)' }}
						whileInView={{ transform: 'scale(1)' }}
						transition={{ duration: 1, type: 'spring' }}
						viewport={{ once: true }}
						sx={{
							display: { xs: 'none', md: 'block' },
							position: 'absolute',
							left: { md: '145px', lg: '210px' },
							bottom: { md: '-60px', lg: '-50px' },
							transform: 'scale(0.96)',
						}}>
						{icons.star}
					</Box>
					<Box
						component={motion.div}
						initial={{ transform: 'translateX(100%)' }}
						whileInView={{ transform: 'translateX(0%)' }}
						transition={{ duration: 1.5, type: 'spring' }}
						viewport={{ once: true }}
						sx={{
							display: { xs: 'none', md: 'block' },
							position: 'absolute',
							right: { md: '10px', lg: '-100px' },
							bottom: { md: '3px', lg: '60px' },
						}}>
						<Box
							component="span"
							sx={{ position: 'absolute', left: '-20px', top: '-30px' }}>
							{icons.gc}
						</Box>
						<Comment
							text="تطبيق موبايل"
							bgcolor={'var(--green)'}
							textcolor="black"
						/>
					</Box>
					<Box
						component={motion.div}
						initial={{ transform: 'translateX(-100%)' }}
						whileInView={{ transform: 'translateX(0%)' }}
						transition={{ duration: 1.5, type: 'spring' }}
						viewport={{ once: true }}
						sx={{
							display: { xs: 'none', md: 'block' },
							position: 'absolute',
							left: { md: '-10px', lg: '-60px' },
							top: { md: '-40px', lg: '-20px' },
						}}>
						<Box
							component="span"
							sx={{ position: 'absolute', right: '-18px', bottom: '-33px' }}>
							{icons.pc}
						</Box>
						<Comment
							text="كاشيير"
							bgcolor={'var(--purple)'}
							textcolor="white"
						/>
					</Box>
				</Box>
				<Typography
					variant="body1"
					sx={{ width: { xs: '100%', lg: '40%' }, color: 'var(--gray)' }}>
					بخطوات بسيطه وبدون مبرمج و اجهزة كاشير ونقاط بيع. اربط جميع عملياتك في
					مكان واحد
				</Typography>
				<Stack
					direction={{ xs: 'column', md: 'row' }}
					sx={{
						position: 'relative',
						gap: '0.5rem',
						width: { xs: '100%', md: 'auto' },
					}}>
					<CustomButton
						text="تسجيل الدخول"
						textcolor="white"
						bgcolor="var(--blue)"
						paddingsize="0.875rem 1.25rem"
					/>
					<CustomButton
						text="قم بعمل حساب جديد"
						textcolor="var(--dark-gray)"
						bgcolor="transparent"
						paddingsize="0.89rem 1.25rem"
					/>
					<Box
						component="span"
						sx={{
							display: { xs: 'none', md: 'block' },
							position: 'absolute',
							right: '-71%',
							bottom: '-171%',
						}}>
						{icons.dotted}
					</Box>
				</Stack>
			</Stack>
			<Box
				sx={{
					position: 'relative',
					height: { xs: '490px', md: '590px', lg: '720px' },
					overflow: 'hidden',
				}}>
				<Box
					component={motion.div}
					whileInView={{ width: '0%' }}
					transition={{ duration: 2 }}
					viewport={{ once: true }}
					sx={{
						width: '100%',
						height: '100%',
						backgroundColor: 'var(--bg-color)',
						position: 'absolute',
						left: '0',
						top: '0',
						zIndex: '1',
					}}></Box>
				<Box
					component={motion.div}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1, delay: 2 }}
					viewport={{ once: true }}
					sx={{
						position: 'absolute',
						left: '50%',
						top: '50%',
						transform: 'translate(-52%,-50%)',
						backgroundImage: {
							xs: `url(${require(`../assets/images/phone-image3.png`)})`,
							md: `url(${require('../assets/images/phone-image2.png')})`,
							lg: `url(${require(`../assets/images/phone-image${
								themeContext === 'dark' ? '-dark' : ''
							}.png`)})`,
						},
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'contain',
						backgroundPosition: 'center',
						width: '100%',
						height: '100%',
						zIndex: '2',
					}}></Box>
				{/* <Box
					sx={{
						position: 'absolute',
						left: '48%',
						top: '50%',
						transform: 'translate(-50%,-50%)',
						backgroundImage: `url(${require('../assets/images/phone-image.png')})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: { xs: 'cover', md: 'contain' },
						backgroundPosition: 'center',
						width: '100%',
						height: '100%',
					}}></Box> */}
				<Box
					sx={{
						width: '100%',
						height: '100%',
						backgroundImage: `url(${require(`../assets/images/waves${
							themeContext === 'dark' ? '-dark' : ''
						}.png`)})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: { xs: 'cover', lg: 'contain' },
						backgroundPosition: { xs: 'unset', lg: 'center' },
						backgroundPositionX: { xs: '97%', md: '18%' },
						backgroundPositionY: { xs: '0px', md: '8px' },
					}}></Box>
			</Box>
		</Stack>
	);
};

export default Hero;
