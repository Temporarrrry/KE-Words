import { palette } from "lib/styles/palette";
import React from "react";
import styled from "styled-components";

function Footer() {
	return (
		<StyledFooter>
			Designed By <a href="https://github.com/L-Hyun">LHyun</a>
			<br />
			<a href="https://github.com/L-Hyun/KE-Words">
				https://github.com/L-Hyun/KE-Words
			</a>
			<br />
			<br />
			Privacy Policy
			<br />
			<br />이 페이지에는 우아한형제들에서 제공한 배달의민족 폰트가 적용되어
			있습니다.
		</StyledFooter>
	);
}

const StyledFooter = styled.div`
	font-size: 12px;
	height: 75px;
	text-align: left;
	position: absolute;
	left: 10px;
	bottom: 0px;
	color: ${palette.gray};
`;

export default Footer;
