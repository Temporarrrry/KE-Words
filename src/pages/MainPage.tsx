import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../components/atoms/Button";
import MainTitle from "../components/molecules/main/MainTitle";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <Article>
      <MainTitle />
      <Section>
        <Button
          type="border"
          width="90%"
          height="40%"
          fontSize={2}
          smallFont={1.5}
          onClick={() => {
            navigate("/study/select");
          }}>
          공부하기
        </Button>
        <Button
          type="border"
          width="40%"
          height="40%"
          fontSize={2}
          smallFont={1.5}
          onClick={() => {
            navigate("/practice/select");
          }}>
          연습하기
        </Button>
        <Button
          type="border"
          width="40%"
          height="40%"
          fontSize={2}
          smallFont={1.5}
          onClick={() => {
            navigate("/test/select");
          }}>
          시험보기
        </Button>
      </Section>
    </Article>
  );
};

const Article = styled.article`
  width: 80%;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Section = styled.section`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default MainPage;
