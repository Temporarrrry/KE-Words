import React, { FunctionComponent, HTMLProps } from "react";
import { ButtonLayout, ButtonLayoutProps } from "./styles";

export interface ButtonProps
	extends HTMLProps<HTMLButtonElement>,
		ButtonLayoutProps {
	type?: "submit" | "button";
	children: React.ReactNode;
	buttonType?: "bg" | "border";
	color?: "blue" | "pink";
	width?: string;
	height?: string;
	fontSize?: string;
	onClick: () => void;
}

const Button: FunctionComponent<ButtonProps> = (props) => {
	return (
		<ButtonLayout
			type={props.type}
			buttonType={props.buttonType}
			color={props.color}
			style={{
				width: props.width,
				height: props.height,
				fontSize: props.fontSize,
			}}
			onClick={props.onClick}
		>
			{props.children}
		</ButtonLayout>
	);
};

Button.defaultProps = {
	type: "submit",
	buttonType: "bg",
	color: "blue",
	width: "200px",
	height: "50px",
	fontSize: "18px",
};

export default Button;
