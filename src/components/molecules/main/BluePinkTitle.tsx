import styled from "styled-components";
import BlueText from "../../atoms/texts/BlueText";
import PinkText from "../../atoms/texts/PinkText";

type Props = {
	title: string;
	subTitle: string;
	gap: string;
};

const MainTitle = (props: Props) => {
	return (
		<Div style={{ gap: props.gap }}>
			<BlueText fontSize="40px">{props.title}</BlueText>
			<PinkText fontSize="40px">'{props.subTitle}'</PinkText>
		</Div>
	);
};

MainTitle.defaultProps = {
	gap: "10px",
};

const Div = styled.div`
	display: flex;
	flex-direction: column;
`;

export default MainTitle;
