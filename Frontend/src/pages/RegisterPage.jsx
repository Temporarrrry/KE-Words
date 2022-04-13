import Button from "components/Common/Button";
import Footer from "components/Common/Footer";
import Input from "components/Common/Input";
import PageLayout from "components/Common/PageLayout";
import PageTitle from "components/Common/PageTitle";
import React from "react";
import styled from "styled-components";

function RegisterPage() {
	return (
		<PageLayout>
			<PageTitle>회원가입'^'</PageTitle>
			<AlignBox>
				<Input placeholder="ID" />
				<Input placeholder="PW" type="password" />
				<Input placeholder="PW 확인" type="password" />
				<Button>가입하기</Button>
			</AlignBox>
			<Footer />
		</PageLayout>
	);
}

const AlignBox = styled.div`
	height: 280px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-top: 50px;
`;

export default RegisterPage;
