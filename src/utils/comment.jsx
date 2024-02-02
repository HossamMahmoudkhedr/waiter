import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
	padding: 0.5rem 1rem;
	border-radius: 1rem;
	color: ${(props) => props.textcolor};
	background-color: ${(props) => props.bgcolor};
`;

const Comment = ({ bgcolor, textcolor, text }) => {
	return (
		<StyledSpan
			bgcolor={bgcolor}
			textcolor={textcolor}>
			{text}
		</StyledSpan>
	);
};

export default Comment;
