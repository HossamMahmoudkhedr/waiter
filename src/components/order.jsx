import { Box } from '@mui/material';
import React from 'react';
import SolContent from '../utils/solContent';
import CustomButton from '../utils/customButton';
import Questions from './questions';

const Order = () => {
	return (
		<Box>
			<SolContent
				lgdir="row-reverse"
				align="start"
				img="tablet-lg.png"
				head="نظام متكامل لنقاط البيع و إدارة المطاعم."
				text="نظـام نقـاط البيع وإدارة المطاعم نظّم أقسام مطعمك الأماميّة، عمليّات المطبخ، والعمليّات الخلفية بسهولة ودقّة ومرونة."
				title="طريقة الطلب"
				padding="3.5rem 5rem"
				width="55%"
				gap="10rem"
				fs="3rem"
				lh="56px"
				button={
					<CustomButton
						bgcolor="var(--blue)"
						paddingsize="0.625rem 1.25rem"
						textcolor="white"
						text="أطلب عرض النظام"
						width="100%"
					/>
				}
			/>
			<Questions />
		</Box>
	);
};

export default Order;
