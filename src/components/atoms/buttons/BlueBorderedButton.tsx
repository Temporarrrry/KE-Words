import React from "react";
import styled from "styled-components";
import Colors from "../../lib/Colors";

type Props = {
	onClick: () => void;
	width: string;
	height: string;
	fontSize: string;
	children: React.ReactNode;
};

const BlueBorderedButton = (props: Props) => {
	return (
		<Button
			onClick={props.onClick}
			style={{
				width: props.width,
				height: props.height,
				fontSize: props.fontSize,
			}}
		>
			{props.children}
		</Button>
	);
};

BlueBorderedButton.defaultProps = {
	width: "200px",
	height: "50px",
	fontSize: "18px",
};

const Button = styled.button`
	border: 1px solid ${Colors.blue};
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${Colors.blue};
`;

export default BlueBorderedButton;
