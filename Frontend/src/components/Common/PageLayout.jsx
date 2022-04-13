import React from "react";
import styled from "styled-components";

function PageLayout({ children }) {
	return <Layout>{children}</Layout>;
}

const Layout = styled.div`
	margin: 0 auto;
	width: 750px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default PageLayout;
