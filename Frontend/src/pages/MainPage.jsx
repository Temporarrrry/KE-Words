import Footer from "components/common/Footer";
import OutlinedButton from "components/common/OutlinedButton";
import PageLayout from "components/common/PageLayout";
import PageTitle from "components/common/PageTitle";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function MainPage() {
	const navigate = useNavigate();

	return (
		<PageLayout>
			<PageTitle color={false}>KE-Words</PageTitle>
			<PageTitle>'한국어, 영어 단어를 공부를 위한'</PageTitle>
			<ButtonBox>
				<ButtonBoxLine>
					<OutlinedButton
						width="450px"
						height="150px"
						action={() => navigate("/study/kr")}
					>
						한국어 단어 공부하기
					</OutlinedButton>
					<OutlinedButton
						width="450px"
						height="150px"
						action={() => navigate("/study/en")}
					>
						영어 단어 공부하기
					</OutlinedButton>
				</ButtonBoxLine>
				<ButtonBoxLine>
					<OutlinedButton
						width="450px"
						height="150px"
						action={() => navigate("/test/kr")}
					>
						한국어 단어 시험보기
					</OutlinedButton>
					<OutlinedButton
						width="450px"
						height="150px"
						action={() => navigate("/test/en")}
					>
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
