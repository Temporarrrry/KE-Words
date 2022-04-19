import { palette } from "lib/styles/palette";
import React from "react";
import styled from "styled-components";

function PageTitle({ color = true, children }) {
	return <StyledTitle color={color}>{children}</StyledTitle>;
}

const StyledTitle = styled.div`
	width: 600px;
	height: 100px;
	line-height: 100px;
	text-align: center;
	vertical-align: middle;
	color: ${(props) => (props.color ? palette.Secondary : palette.Primary)};
	font-size: 35px;
	margin-top: 50px;

	@media screen and (max-width: 750px) {
		width: 100%;
	}
`;

export default PageTitle;
