import styled from "styled-components";
import Text from "../../atoms/Text";

const MainTitle = () => {
  return (
    <Div>
      <Text fontSize={3} smallFont={2}>
        KE-Words
      </Text>
      <Text color="pink" fontSize={3} smallFont={1.5}>
        한국어, 영어를 공부하는 사람들을 위한
      </Text>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default MainTitle;
