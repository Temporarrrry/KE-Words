import Button from "components/common/Button";
import Input from "components/common/Input";
import PageLayout from "components/common/PageLayout";
import PageTitle from "components/common/PageTitle";
import React, { useState } from "react";
import useInputStore from "stores/inputStore";
import styled from "styled-components";

function LoginPage() {
	const { id, setId } = useInputStore();
	const [pw, setPw] = useState("");

	const submit = () => {
		console.log(id);
		console.log(pw);
	};

	return (
		<PageLayout>
			<PageTitle>로그인'^'</PageTitle>
			<AlignBox>
				<Input placeholder="ID" value={id} onChange={(e) => setId(e)} />
				<Input
					placeholder="PW"
					type="password"
					value={pw}
					onChange={(e) => setPw(e.target.value)}
				/>
				<Button action={submit}>로그인</Button>
			</AlignBox>
		</PageLayout>
	);
}

const AlignBox = styled.div`
	height: 210px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-top: 50px;
`;

export default LoginPage;
