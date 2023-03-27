import { palette } from "lib/styles/palette";
import React from "react";
import styled from "styled-components";

function PageMiniTitle({ color = true, children }) {
	return <MiniTitle color={color}>{children}</MiniTitle>;
}

const MiniTitle = styled.div`
	height: 30px;
	line-height: 30px;
	vertical-align: middle;
	font-size: 20px;
	color: ${(props) => (props.color ? palette.Primary : palette.Secondary)};
`;

export default PageMiniTitle;
