import styled from "styled-components";

type Props = {
	children: React.ReactNode;
	gap: string;
};

const SpaceAroundCol = (props: Props) => {
	return <Div style={{ gap: props.gap }}>{props.children}</Div>;
};

SpaceAroundCol.defaultProps = {
	gap: "0px",
};

const Div = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;

export default SpaceAroundCol;
