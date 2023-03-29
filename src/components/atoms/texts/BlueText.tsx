import React from "react";
import styled from "styled-components";
import Colors from "../../lib/Colors";

type Props = {
	children: React.ReactNode;
	width: string;
	height: string;
	fontSize: string;
};

const BlueText = (props: Props) => {
	return (
		<Text
			style={{
				width: props.width,
				height: props.height,
				fontSize: props.fontSize,
			}}
		>
			{props.children}
		</Text>
	);
};

BlueText.defaultProps = {
	width: "auto",
	height: "auto",
	fontSize: "30px",
};

const Text = styled.div`
	color: ${Colors.blue};
	text-align: center;
`;

export default BlueText;
