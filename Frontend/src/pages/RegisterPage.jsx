import Button from "components/common/Button";
import Input from "components/common/Input";
import PageLayout from "components/common/PageLayout";
import PageTitle from "components/common/PageTitle";
import React, { useState } from "react";
import useInputStore from "stores/inputStore";
import styled from "styled-components";

function RegisterPage() {
	const { id, setId } = useInputStore();
	const [pw, setPw] = useState("");
	const [pwConfirm, setPwConfirm] = useState("");

	const submit = () => {
		console.log(id);
		console.log(pw);
		console.log(pwConfirm);
	};

	return (
		<PageLayout>
			<PageTitle>회원가입'^'</PageTitle>
			<AlignBox>
				<Input placeholder="ID" value={id} onChange={(e) => setId(e)} />
				<Input
					placeholder="PW"
					type="password"
					value={pw}
					onChange={(e) => setPw(e.target.value)}
				/>
				<Input
					placeholder="PW 확인"
					type="password"
					value={pwConfirm}
					onChange={(e) => setPwConfirm(e.target.value)}
				/>
				<Button action={submit}>가입하기</Button>
			</AlignBox>
		</PageLayout>
	);
}

const AlignBox = styled.div`
	height: 280px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-top: 50px;
`;

export default RegisterPage;
