import styled, { css } from "styled-components";
import Colors from "../../../lib/Colors";

export interface TextLayoutProps {
	color?: "blue" | "pink";
	fontSize?: "small" | "medium" | "large" | "title";
}

export const blueTextStyles = css`
	color: ${Colors.blue};
`;
export const pinkTextStyles = css`
	color: ${Colors.pink};
`;
export const smallTextStyles = css`
	font-size: 10px;
`;
export const mediumTextStyles = css`
	font-size: 16px;
`;
export const largeTextStyles = css`
	font-size: 30px;
`;
export const titleTextStyles = css`
	font-size: 45px;
`;

export const TextLayout = styled.div<TextLayoutProps>`
	text-align: center;

	${({ color }) => {
		switch (color) {
			case "blue":
				return blueTextStyles;
			case "pink":
				return pinkTextStyles;
			default:
				return blueTextStyles;
		}
	}}

	${({ fontSize }) => {
		switch (fontSize) {
			case "small":
				return smallTextStyles;
			case "medium":
				return mediumTextStyles;
			case "large":
				return largeTextStyles;
			case "title":
				return titleTextStyles;
		}
	}}
`;

export default {
	TextLayout,
};
