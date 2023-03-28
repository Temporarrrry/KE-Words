import { useState } from "react";
import styled from "styled-components";
import BlueBgButton from "../../atoms/buttons/BlueBgButton";
import BlueBorderedInput from "../../atoms/inputs/BlueBorderedInput";
import SpaceAroundCol from "../../atoms/layouts/SpaceAroundCol";
import PinkText from "../../atoms/texts/PinkText";

type Props = {};

const LoginPanel = (props: Props) => {
	const [email, setEmail] = useState("");
	const [pw, setPw] = useState("");

	const login: () => void = () => {
		console.log(email, pw);
	};

	return (
		<Article>
			<Section>
				<PinkText>로그인'^'</PinkText>
				<SpaceAroundCol gap="30px">
					<BlueBorderedInput
						value={email}
						setValue={setEmail}
						placeholder="Email"
						width="600px"
					/>
					<BlueBorderedInput
						type="password"
						value={pw}
						setValue={setPw}
						placeholder="PW"
						width="600px"
					/>
					<BlueBgButton width="600px" onClick={login}>
						로그인
					</BlueBgButton>
				</SpaceAroundCol>
			</Section>
		</Article>
	);
};

const Article = styled.article`
	width: 600px;
	height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20vh auto;
`;
const Section = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

export default LoginPanel;
