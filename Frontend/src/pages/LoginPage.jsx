import Button from "components/Common/Button";
import Footer from "components/Common/Footer";
import Input from "components/Common/Input";
import PageLayout from "components/Common/PageLayout";
import PageTitle from "components/Common/PageTitle";
import React from "react";
import styled from "styled-components";

function LoginPage() {
	return (
		<PageLayout>
			<PageTitle>로그인'^'</PageTitle>
			<AlignBox>
				<Input placeholder="ID" />
				<Input placeholder="PW" type="password" />
				<Button>로그인</Button>
			</AlignBox>
			<Footer />
		</PageLayout>
	);
}

const AlignBox = styled.div`
	height: 210px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-top: 50px;
`;

export default LoginPage;
