import { useState } from "react";
import styled from "styled-components";
import SpaceAroundCol from "../../atoms/layouts/SpaceAroundCol";
import APIs from "../../../lib/APIs";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Text from "../../atoms/Text";

type Props = {};

const LoginPanel = (props: Props) => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [pw, setPw] = useState("");

	const login: () => void = () => {
		// APIs.login(email, pw).then((res) => {
		// 	console.log(res);
		// 	if (res.status === 200) {
		// 		navigate("/");
		// 	}
		// });
		console.log(email, pw);
	};

	return (
		<Article>
			<Section>
				<Text color="pink" fontSize="large">
					로그인'^'
				</Text>
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
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
						<Button width="600px" onClick={login}>
							로그인
						</Button>
					</SpaceAroundCol>
				</form>
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
