import React from "react";
import styled from "styled-components";
import Colors from "../../lib/Colors";

type Props = {
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
	width: string;
	height: string;
	fontSize: string;
	placeholder: string;
	type: string;
};

const BlueBorderedInput = (props: Props) => {
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		props.setValue(e.target.value);
	};

	return (
		<Input
			style={{
				width: props.width,
				height: props.height,
				lineHeight: props.height,
				fontSize: props.fontSize,
			}}
			type={props.type}
			value={props.value}
			onChange={onChange}
		/>
	);
};

BlueBorderedInput.defaultProps = {
	type: "text",
	placeholder: "",
	width: "200px",
	height: "50px",
	fontSize: "18px",
};

const Input = styled.input`
	border: 1px solid ${Colors.blue};
	padding-left: 10px;
	border-radius: 10px;
`;

export default BlueBorderedInput;
