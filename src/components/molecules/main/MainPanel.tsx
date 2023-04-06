import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BluePinkTitle from "./BluePinkTitle";
import Button from "../../atoms/Button";

type Props = {};

const MainPanel = (props: Props) => {
	const navigate = useNavigate();

	return (
		<Article>
			<BluePinkTitle
				title="KE-Words"
				subTitle="한국어, 영어를 공부하는 사람들을 위한"
				gap="30px"
			/>
			<Section>
				<Button
					buttonType="border"
					width="40%"
					height="30%"
					fontSize="40px"
					onClick={() => {
						navigate("/study/kr");
					}}
				>
					한국어 단어 공부하기
				</Button>
				<Button
					buttonType="border"
					width="40%"
					height="30%"
					fontSize="40px"
					onClick={() => {
						navigate("/study/en");
					}}
				>
					영어 단어 공부하기
				</Button>
				<Button
					buttonType="border"
					width="40%"
					height="30%"
					fontSize="40px"
					onClick={() => {
						navigate("/test/kr");
					}}
				>
					한국어 단어 시험보기
				</Button>
				<Button
					buttonType="border"
					width="40%"
					height="30%"
					fontSize="40px"
					onClick={() => {
						navigate("/test/en");
					}}
				>
					영어 단어 시험보기
				</Button>
			</Section>
		</Article>
	);
};

const Article = styled.article`
	width: 80%;
	height: calc(100vh - 50px);
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const Section = styled.section`
	width: 100%;
	height: 50vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

export default MainPanel;
