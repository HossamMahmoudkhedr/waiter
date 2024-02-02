import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled(Button)`
	&& {
		background-color: ${(props) => props.bgcolor};
		color: ${(props) => props.textcolor};
		padding: ${(props) => props.paddingsize};
		border: 2px solid
			${(props) =>
				props.bgcolor === 'transparent' ? 'var(--dark-gray)' : 'var(--blue)'};
		border-radius: 0.5rem;
		font-size: ${(props) => props.fs};
		width: ${(props) => props.width};
	}

	&&:hover {
		background-color: ${(props) => props.bgcolor};
	}
`;

const CustomButton = ({ text, textcolor, bgcolor, paddingsize, fs, width }) => {
	return (
		<StyledButton
			textcolor={textcolor || 'var(--dark-gray)'}
			bgcolor={bgcolor}
			paddingsize={paddingsize}
			fs={fs || '16px'}
			width={width || 'auto'}>
			{text}
		</StyledButton>
	);
};

export default CustomButton;
