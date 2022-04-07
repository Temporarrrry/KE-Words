import { palette } from "lib/styles/palette";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function HeaderButton({ text, route }) {
	return (
		<Button>
			<Link to={route}>{text}</Link>
		</Button>
	);
}

const Button = styled.div`
	width: 150px;
	height: 50px;
	line-height: 50px;
	font-size: 30px;
	text-align: center;
	color: ${palette.Secondary};
`;

export default HeaderButton;
