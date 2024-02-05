import { Box } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const circleStyles = `
	border-radius: 50%;
	position: absolute;
	filter: blur(250px);
	@media (max-width:992px){
		filter:blur(200px);
	}
`;

const StyledMain = styled.div`
	width: 100%;
	min-height: 100%;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	pointer-events: none;
	// z-index: -1;
	top: 0;
	left: 0;
	@media (max-width: 1300px) {
		& {
			// overflow: hidden;
		}
	}
`;

const StyledGreenCircle = styled.div`
	${circleStyles}
	width: 60%;
	height: 60%;
	background: #cff85b;
	top: ${(props) => props.gtop};
	left: ${(props) => props.gleft};
	@media (max-width: 768px) {
		left: 25%;
	}
`;

const StyledBlueCircle = styled.div`
	${circleStyles}
	width: 50%;
	height: 50%;
	background: #3efbe0;
	top: ${(props) => props.ytop};
	right: ${(props) => props.yright};

	@media (max-width: 768px) {
		top: -12%;
	}
`;
const Gradient = ({ gtop, gleft, ytop, yright, opacity }) => {
	return (
		<StyledMain>
			<Box sx={{ opacity: opacity || 0.7 }}>
				<StyledGreenCircle
					gtop={gtop}
					gleft={gleft}></StyledGreenCircle>
				<StyledBlueCircle
					ytop={ytop}
					yleft={yright}></StyledBlueCircle>
			</Box>
		</StyledMain>
	);
};

export default Gradient;
