import React, { useState } from "react";
import styled from "styled-components";
import PinkText from "../../atoms/texts/PinkText";
import SpaceAroundCol from "../../atoms/layouts/SpaceAroundCol";
import BlueBorderedInput from "../../atoms/inputs/BlueBorderedInput";
import BlueBgButton from "../../atoms/buttons/BlueBgButton";

type Props = {};

function RegisterPanel({}: Props) {
	const [email, setEmail] = useState("");
	const [pw, setPw] = useState("");
	const [pwConfrim, setPwConfrim] = useState("");

	const register: () => void = () => {
		console.log(email, pw);
	};

	return (
		<Article>
			<Section>
				<PinkText>회원가입'^'</PinkText>
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
					<BlueBorderedInput
						type="password"
						value={pwConfrim}
						setValue={setPwConfrim}
						placeholder="PW 확인"
						width="600px"
					/>
					<BlueBgButton width="600px" onClick={register}>
						회원가입
					</BlueBgButton>
				</SpaceAroundCol>
			</Section>
		</Article>
	);
}

const Article = styled.article`
	width: 600px;
	height: 400px;
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

export default RegisterPanel;
