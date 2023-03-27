import React from "react";
import styled from "styled-components";

function PageLayout({ children }) {
	return <Layout>{children}</Layout>;
}

const Layout = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (max-width: 750px) {
		width: 100%;
	}
`;

export default PageLayout;
