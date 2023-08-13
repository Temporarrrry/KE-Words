import styled from "styled-components";
import Text from "../../atoms/Text";

type Props = {
  title: string;
  subTitle: string;
  gap: string;
};

const MainTitle = (props: Props) => {
  return (
    <Div style={{ gap: props.gap }}>
      <Text fontSize={3} smallFont={2}>
        {props.title}
      </Text>
      <Text color="pink" fontSize={3} smallFont={1.5}>
        {props.subTitle}
      </Text>
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
