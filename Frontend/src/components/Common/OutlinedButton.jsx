import { palette } from "lib/styles/palette";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function OutlinedButton({ width, height, color = true, action, children }) {
	return (
		<StyledButton width={width} height={height} color={color} onClick={action}>
			{children}
		</StyledButton>
	);
}

const StyledButton = styled.button`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	line-height: ${(props) => props.height};
	color: ${(props) => (props.color ? palette.Primary : palette.Secondary)};
	font-size: ${(props) => (props.height !== "150px" ? "30px" : "50px")};
	border: 1px solid
		${(props) => (props.color ? palette.Primary : palette.Secondary)};
	border-radius: 10px;
	text-align: center;
	vertical-align: middle;
`;

export default OutlinedButton;
