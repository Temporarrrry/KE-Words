import React, { FunctionComponent, HTMLProps } from "react";
import { InputLayout, InputLayoutProps } from "./styles";

export interface InputProps
	extends HTMLProps<HTMLInputElement>,
		InputLayoutProps {
	type?: "text" | "number" | "email" | "password";
	color?: "blue" | "pink";
	width?: string;
	height?: string;
	fontSize?: string;
	placeholder?: string;
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input: FunctionComponent<InputProps> = (props) => {
	const onChange = (e: any) => {
		props.setValue(e.currentTarget.value);
	};

	return (
		<InputLayout
			type={props.type}
			color={props.color}
			style={{
				width: props.width,
				height: props.height,
				lineHeight: props.height,
				fontSize: props.fontSize,
			}}
			placeholder={props.placeholder}
			value={props.value}
			onChange={onChange}
		/>
	);
};

Input.defaultProps = {
	type: "text",
	color: "blue",
	placeholder: "",
	width: "200px",
	height: "50px",
	fontSize: "18px",
};

export default Input;
