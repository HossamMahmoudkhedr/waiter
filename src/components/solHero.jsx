import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Header from '../utils/header';
import TextContainer from '../utils/textContainer';

const SolHero = () => {
	return (
		<Box
			sx={{
				padding: '3.5rem 0 0 0',
				backgroundImage: `url(${require(`../assets/images/Waves2.png`)})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: { xs: '65% 0px', md: 'right', lg: 'center' },
			}}>
			<Stack
				className="container"
				direction={{ xs: 'column', lg: 'row' }}
				sx={{
					alignItems: 'center',
					gap: '4rem',
					justifyContent: 'space-between',
				}}>
				<Box sx={{ width: { xs: '90%', md: '75%', lg: '41%' } }}>
					<TextContainer
						align={'start'}
						head={'تطبيق لنشاطك التجاري.'}
						text={
							'وفّر لعملائك تجربة تسوق مميزة تناسب نشاطك التجاري، سواء كان مطعمًا أو مقهى أو متجرًا إلكترونيًا. وذلك من خلال مزايا عديدة مثل، قوائم طعام تفاعلية، تحديد موقع العملاء بدقة عالية، والدفع السريع، ولوحة تحكم متكاملة لتصميم واجهات تطبيقك، وأكثر.'
						}
						title={'الحلول'}
						fs={'3rem'}
						lh={'56px'}
					/>
				</Box>
				<Stack>
					<Box sx={{ display: { xs: 'none', lg: 'block' }, width: '650px' }}>
						<img
							style={{ width: '100%' }}
							src={require(`../assets/images/half-phone-lg.png`)}
							alt=""
							loading="lazy"
						/>
					</Box>
					<Box
						sx={{
							display: { xs: 'none', md: 'block', lg: 'none' },
							width: '100%',
						}}>
						<img
							style={{ width: '100%' }}
							src={require(`../assets/images/half-phone-md.png`)}
							alt=""
						/>
					</Box>
					<Box
						sx={{
							display: { xs: 'block', md: 'none', lg: 'none' },
							width: '100%',
						}}>
						<img
							style={{ width: '100%' }}
							src={require(`../assets/images/half-phone-sm.png`)}
							alt=""
						/>
					</Box>
				</Stack>
			</Stack>
		</Box>
	);
};

export default SolHero;
