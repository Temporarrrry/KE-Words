import { palette } from "lib/styles/palette";
import React from "react";
import styled from "styled-components";

function Button({ size = true, children }) {
	const style = size ? { width: "600px" } : { width: "400px" };
	return <StyledButton style={style}>{children}</StyledButton>;
}

const StyledButton = styled.button`
	height: 50px;
	border-radius: 10px;
	font-size: 26px;
	background-color: ${palette.Primary};
	color: white;
	padding: 7px 8px 7px 8px;
	display: block;
`;

export default Button;
