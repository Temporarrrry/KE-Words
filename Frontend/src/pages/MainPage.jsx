import OutlinedButton from "components/common/OutlinedButton";
import PageLayout from "components/common/PageLayout";
import PageTitle from "components/common/PageTitle";
import React from "react";
import styled from "styled-components";
import useUserStore from "stores/userStore";
import { useNavigate } from "react-router-dom";

function MainPage() {
	const { isLoggedIn, user } = useUserStore();
	const navigate = useNavigate();

	const redirect = (route) => {
		if (!isLoggedIn) {
			navigate("/login");
			return;
		}

		if (route.slice(1, 5) === "test") {
			navigate(route);
		} else {
			let wordNum = route.slice(-2) === "kr" ? user.curKrWord : user.curEnWord;
			navigate(route + "/" + wordNum);
		}
	};

	return (
		<PageLayout>
			<PageTitle color={false}>KE-Words</PageTitle>
			<PageTitle>'한국어, 영어 단어를 공부를 위한'</PageTitle>
			<ButtonBox>
				<ButtonBoxLine>
					<OutlinedButton
						width="350px"
						height="150px"
						action={() => redirect("/study/kr")}
					>
						한국어 단어 공부하기
					</OutlinedButton>
					<OutlinedButton
						width="350px"
						height="150px"
						action={() => redirect("/study/en")}
					>
						영어 단어 공부하기
					</OutlinedButton>
				</ButtonBoxLine>
				<ButtonBoxLine>
					<OutlinedButton
						width="350px"
						height="150px"
						action={() => redirect("/test/kr")}
					>
						한국어 단어 시험보기
					</OutlinedButton>
					<OutlinedButton
						width="350px"
						height="150px"
						action={() => redirect("/test/en")}
					>
						영어 단어 시험보기
					</OutlinedButton>
				</ButtonBoxLine>
			</ButtonBox>
		</PageLayout>
	);
}

const ButtonBox = styled.div`
	width: 750px;
	height: 450px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	margin-top: 30px;

	@media screen and (max-width: 750px) {
		width: 100%;
	}
`;

const ButtonBoxLine = styled.div`
	width: 750px;
	display: flex;
	justify-content: space-around;

	@media screen and (max-width: 750px) {
		width: 100%;
	}
`;

export default MainPage;
