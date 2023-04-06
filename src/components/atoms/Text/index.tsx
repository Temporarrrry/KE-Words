import React, { FunctionComponent, HTMLProps } from "react";
import { TextLayout, TextLayoutProps } from "./styles";

export interface TextProps extends HTMLProps<HTMLDivElement>, TextLayoutProps {
	color?: "blue" | "pink";
	children: React.ReactNode;
	width?: string;
	height?: string;
	fontSize?: "small" | "medium" | "large" | "title";
}

const Text: FunctionComponent<TextProps> = (props) => {
	return (
		<TextLayout
			color={props.color}
			fontSize={props.fontSize}
			style={{
				width: props.width,
				height: props.height,
			}}
		>
			{props.children}
		</TextLayout>
	);
};

Text.defaultProps = {
	color: "blue",
	fontSize: "medium",
	width: "auto",
	height: "auto",
};

export default Text;
