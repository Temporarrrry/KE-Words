import { palette } from "lib/styles/palette";
import React from "react";
import styled from "styled-components";

function Button({ children }) {
	return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.button`
	width: 600px;
	height: 50px;
	border-radius: 10px;
	font-size: 26px;
	background-color: ${palette.Primary};
	color: white;
	padding: 7px 8px 7px 8px;
	display: block;

	@media screen and (max-width: 750px) {
		width: 400px;
	}
`;

export default Button;
