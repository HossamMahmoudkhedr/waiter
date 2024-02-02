import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import CustomButton from '../utils/customButton';
import { icons } from '../utils/icons';
import Comment from '../utils/comment';

const Hero = () => {
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
				}}>
				<Box
					sx={{
						width: { xs: '100%', lg: '60%' },
						position: 'relative',
					}}>
					<Box
						component="span"
						sx={{
							display: { xs: 'none', md: 'block' },
							position: 'absolute',
							right: { md: '-33px', lg: '-60px' },
							top: { md: '-64px', lg: '-60px' },
						}}>
						{icons.star}
					</Box>
					<Typography
						variant="h1"
						sx={{
							fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' },
							fontWeight: '500',
							lineHeight: { xs: '40px', md: '55px', lg: '72px' },
						}}>
						أيًا كان نشاطك، مطعم ، كوفي ، سوبر ماركت تطبيقك جاهز خلال 48 ساعة !
					</Typography>
					<Box
						component="span"
						sx={{
							display: { xs: 'none', md: 'block' },
							position: 'absolute',
							left: { md: '145px', lg: '208px' },
							bottom: '-48px',
							transform: 'scale(0.96)',
						}}>
						{icons.star}
					</Box>
					<Box
						sx={{
							display: { xs: 'none', md: 'block' },
							position: 'absolute',
							right: { md: '13px', lg: '-132px' },
							bottom: { md: '3px', lg: '34px' },
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
						sx={{
							display: { xs: 'none', md: 'block' },
							position: 'absolute',
							left: { md: '-10px', lg: '-80px' },
							top: { md: '-40px', lg: '-14px' },
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
						textcolor="black"
						bgcolor="transparent"
						paddingsize="0.89rem 1.25rem"
					/>
					<Box
						component="span"
						sx={{
							display: { xs: 'none', md: 'block' },
							position: 'absolute',
							right: '-64%',
							bottom: '-160%',
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
					sx={{
						position: 'absolute',
						left: '50%',
						top: '50%',
						transform: 'translate(-52%,-50%)',
						backgroundImage: {
							xs: `url(${require('../assets/images/phone-image3.png')})`,
							md: `url(${require('../assets/images/phone-image2.png')})`,
							lg: `url(${require('../assets/images/phone-image.png')})`,
						},
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'contain',
						backgroundPosition: 'center',
						width: '100%',
						height: '100%',
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
						backgroundImage: `url(${require('../assets/images/waves.png')})`,
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
