import React, { useState } from "react";
import styled from "styled-components";
import SpaceAroundCol from "../../atoms/layouts/SpaceAroundCol";
import APIs from "../../../lib/APIs";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Text from "../../atoms/Text";

type Props = {};

function RegisterPanel({}: Props) {
	const [email, setEmail] = useState("");
	const [pw, setPw] = useState("");
	const [pwConfrim, setPwConfrim] = useState("");

	const register: () => void = () => {
		if (pw !== pwConfrim) {
			alert("비밀번호가 맞지 않아요...");
			setPw("");
			setPwConfrim("");
		}
		APIs.register(email, pw).then((res) => {
			console.log(res);
		});
	};

	return (
		<Article>
			<Section>
				<Text color="pink" fontSize="large">
					회원가입'^'
				</Text>
				<SpaceAroundCol gap="30px">
					<Input
						type="email"
						value={email}
						setValue={setEmail}
						placeholder="Email"
						width="600px"
					/>
					<Input
						type="password"
						value={pw}
						setValue={setPw}
						placeholder="PW"
						width="600px"
					/>
					<Input
						type="password"
						value={pwConfrim}
						setValue={setPwConfrim}
						placeholder="PW"
						width="600px"
					/>
					<Button width="600px" onClick={register}>
						로그인
					</Button>
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
