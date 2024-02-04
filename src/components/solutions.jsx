import { Box } from '@mui/material';
import React from 'react';
import Questions from './questions';
import SolContent from '../utils/solContent';
import SolHero from './solHero';

const Solutions = () => {
	return (
		<Box>
			<SolHero />
			<SolContent
				align="start"
				lgdir="row-reverse"
				head="كاشير واجهزة نقاط بيع، فواتير لانهائيه."
				title="الحلول"
				img="tablet-lg.png"
				padding="3.5rem 0 0 0"
				text="وفّر لعملائك تجربة تسوق مميزة تناسب نشاطك التجاري، سواء كان مطعمًا أو مقهى أو متجرًا إلكترونيًا. وذلك من خلال مزايا عديدة مثل، قوائم طعام تفاعلية، تحديد موقع العملاء بدقة عالية، والدفع السريع، ولوحة تحكم متكاملة لتصميم واجهات تطبيقك، وأكثر."
				width="55%"
				gap="9.3rem"
			/>
			<SolContent
				align="center"
				lgdir="column"
				head="ربط الكاشير مع التطبيق لاحصائيات واحده"
				img="wide-tablet-lg.png"
				padding="8rem 18rem "
				text="وفّر لعملائك تجربة تسوق مميزة تناسب نشاطك التجاري، سواء كان مطعمًا أو مقهى أو متجرًا إلكترونيًا. وذلك من خلال مزايا عديدة مثل، قوائم طعام تفاعلية، تحديد موقع العملاء بدقة عالية، والدفع السريع، ولوحة تحكم متكاملة لتصميم واجهات تطبيقك، وأكثر."
				width="65%"
				title="الحلول"
			/>
			<Questions />
		</Box>
	);
};

export default Solutions;
