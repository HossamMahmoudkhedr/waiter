import { Box, Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import Header from '../utils/header';
import { packages } from '../data/packagesData';
import CustomButton from '../utils/customButton';
import { icons } from '../utils/icons';
import { motion } from 'framer-motion';

const Packages = () => {
	const [switchPos, setSwitchPos] = useState('translateX(-95%)');
	const [selectedType, setSelectedType] = useState(0);
	const handleSwitch = () => {
		if (switchPos === 'translateX(0%)') {
			setSwitchPos('translateX(-95%)');
			setSelectedType(0);
		} else {
			setSwitchPos('translateX(0%)');
			setSelectedType(1);
		}
	};
	return (
		<Stack
			id="prices"
			className="container set-padding"
			sx={{ gap: '2.25rem' }}>
			<Header
				text="إختر باقتك الآن."
				title="أسعارنا"
				left={true}
				right={false}
			/>
			<Stack sx={{ alignItems: 'center', marginBottom: '4rem' }}>
				<Stack
					direction="row"
					sx={{ gap: '0.75rem', alignItems: 'center', color: 'var(--black)' }}>
					<Typography
						variant="body1"
						fontSize="0.875rem">
						سنويا
					</Typography>
					<Box
						onClick={handleSwitch}
						sx={{
							width: '56px',
							border: '1px solid var(--blue)',
							borderRadius: '2rem',
							padding: '4px',
							cursor: 'pointer',
						}}>
						<Box
							component="span"
							sx={{
								width: '24px',
								height: '24px',
								borderRadius: '50%',
								backgroundColor: `${
									selectedType === 0 ? 'var(--black)' : 'var(--blue)'
								}`,
								display: 'block',
								transform: switchPos,
								transition: 'all 0.2s ease-in',
							}}></Box>
					</Box>
					<Typography
						variant="body1"
						fontSize="0.875rem">
						شهريا
					</Typography>
				</Stack>
			</Stack>
			<Grid
				container
				rowSpacing={2}
				columnSpacing={{ xs: 0, lg: 2 }}
				width="100%">
				{packages.map((pack, i) => (
					<Grid
						item
						xs={12}
						md={12}
						lg={4}
						order={{ xs: i === 1 ? 1 : 2, lg: i + 1 }}
						key={pack.id}>
						<Box
							component={motion.div}
							initial={{ transform: 'translateY(50%)', opacity: 0 }}
							whileInView={{
								transform: `translateY(${pack.special ? '-3rem' : '0%'})`,
								opacity: 1,
							}}
							transition={{ duration: 2, type: 'spring' }}
							viewport={{ once: true }}
							sx={{
								borderRadius: '2rem',
								border: `2px solid ${
									pack.special ? 'var(--blue)' : 'var(--very-light-gray)'
								}`,
								padding: '2rem 2rem 3rem 2rem',
								transform: {
									md: 'translateY(0)',
									lg: `translateY(${pack.special ? '-3rem' : '0'})`,
								},
								overflow: pack.special ? 'hidden' : 'unset',
								position: pack.special ? 'relative' : 'unset',
							}}>
							{pack.special && (
								<Box
									sx={{
										position: 'absolute',
										top: '15px',
										right: '-70px',
										transform: 'rotate(35deg)',
										textAlign: 'center',
										padding: '0.75rem 0',
										color: 'white',
										backgroundColor: 'var(--blue)',
										width: '250px',
									}}>
									<Typography
										variant="body1"
										sx={{ fontWeight: '500' }}>
										موصى به
									</Typography>
								</Box>
							)}
							<Stack
								sx={{
									alignItems: 'center',
									paddingBottom: '1.5rem',
									borderBottom: '1px solid var(--very-light-gray)',
								}}>
								<Stack sx={{ alignItems: 'center', marginBottom: '1rem' }}>
									<Typography
										variant="h4"
										sx={{ fontSize: '1rem', color: 'var(--gray)' }}>
										{pack.name}
									</Typography>
									<Stack
										direction="row"
										sx={{
											alignItems: 'center',
											gap: '0.5rem',
											color: 'var(--dark-gray)',
										}}>
										<Typography
											variant="body1"
											sx={{ fontSize: '3.5rem', fontWeight: '600' }}>
											{pack.price[selectedType].money}
										</Typography>
										<Typography
											variant="body1"
											sx={{ fontSize: '1.5rem', fontWeight: '500' }}>
											ر.س / {pack.price[selectedType].type}
										</Typography>
									</Stack>
									<Typography
										variant="body1"
										sx={{ fontWeight: '500', color: 'var(--gray)' }}>
										يمكنك الإلغاء متى شئت
									</Typography>
								</Stack>

								<CustomButton
									text="إبدأ الآن"
									bgcolor="var(--blue)"
									fs="1rem"
									textcolor="white"
									paddingsize="0.75rem 0"
									width="100%"
								/>
							</Stack>
							<Stack
								sx={{
									paddingTop: '1.5rem',

									gap: '1.5rem',
								}}>
								{pack.features.map((feature, i) => (
									<Stack
										key={i}
										direction="row"
										sx={{ alignItems: 'center', gap: '1rem' }}>
										<Box component="span">{icons.smallStar}</Box>
										<Typography
											variant="body1"
											sx={{ fontWeight: '500', color: 'var(--gray)' }}>
											{feature}
										</Typography>
									</Stack>
								))}
							</Stack>
						</Box>
					</Grid>
				))}
			</Grid>
		</Stack>
	);
};

export default Packages;
