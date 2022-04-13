import { palette } from "lib/styles/palette";
import React from "react";
import styled from "styled-components";

function Input({ size = true, placeholder, type = "text" }) {
	const style = size ? { width: "600px" } : { width: "400px" };
	return <StyledInput style={style} placeholder={placeholder} type={type} />;
}

const StyledInput = styled.input`
	height: 50px;
	line-height: 50px;
	border: 1px solid ${palette.Primary};
	border-radius: 10px;
	font-size: 26px;
	color: ${palette.Primary};
	padding: 7px 8px 7px 8px;
	display: block;

	:focus {
		outline: 2px solid ${palette.Primary};
	}

	::placeholder {
		color: ${palette.Primary};
	}
`;

export default Input;
