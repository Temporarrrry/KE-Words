import { useState } from "react";
import styled from "styled-components";
import SpaceAroundCol from "../../atoms/layouts/SpaceAroundCol";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Text from "../../atoms/Text";
import Hooks from "../../../lib/Hooks";
import UserStore from "../../../stores/UserStore";

type Props = {};

const LoginPanel = (props: Props) => {
	const { setIsLoggedIn, setEmail, setId, setAccessToken, setRefreshToken } =
		UserStore();
	const navigate = useNavigate();
	const [inputEmail, setInputEmail] = useState("");
	const [pw, setPw] = useState("");

	const login: () => void = () => {
		Hooks.login(inputEmail, pw).then((res) => {
			if (res.status === 200) {
				setIsLoggedIn(true);
				setEmail(inputEmail);
				setId(res.data.id);
				setAccessToken(res.data.accessToken);
				setRefreshToken(res.data.refreshTokne);
				navigate("/");
			}
		});
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
							value={inputEmail}
							setValue={setInputEmail}
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
