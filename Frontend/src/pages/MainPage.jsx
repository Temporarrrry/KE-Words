import Footer from "components/Common/Footer";
import OutlinedButton from "components/Common/OutlinedButton";
import PageLayout from "components/Common/PageLayout";
import PageTitle from "components/Common/PageTitle";
import React from "react";
import styled from "styled-components";

function MainPage() {
	return (
		<PageLayout>
			<PageTitle color={false}>KE-Words</PageTitle>
			<PageTitle>'한국어, 영어 단어를 공부를 위한'</PageTitle>
			<ButtonBox>
				<ButtonBoxLine>
					<OutlinedButton width="450px" height="150px">
						한국어 단어 공부하기
					</OutlinedButton>
					<OutlinedButton width="450px" height="150px">
						영어 단어 공부하기
					</OutlinedButton>
				</ButtonBoxLine>
				<ButtonBoxLine>
					<OutlinedButton width="450px" height="150px">
						한국어 단어 시험보기
					</OutlinedButton>
					<OutlinedButton width="450px" height="150px">
						영어 단어 시험보기
					</OutlinedButton>
				</ButtonBoxLine>
			</ButtonBox>
			<Footer />
		</PageLayout>
	);
}

const ButtonBox = styled.div`
	width: 1000px;
	height: 450px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	margin-top: 30px;

	@media screen and (max-width: 750px) {
		width: 750px;
	}
`;

const ButtonBoxLine = styled.div`
	width: 1000px;
	display: flex;
	justify-content: space-around;

	@media screen and (max-width: 750px) {
		width: 750px;
	}
`;

export default MainPage;
