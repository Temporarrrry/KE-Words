import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../atoms/Button";
import MainTitle from "../molecules/main/MainTitle";

function StudySelectPage() {
  const navigate = useNavigate();
  const component = [
    { link: "/study/word", text: "단어 공부하기" },
    { link: "/study/sentence", text: "문장 공부하기" },
  ];

  return (
    <Article>
      <MainTitle />
      <Section>
        {component.map((item) => {
          return (
            <Button
              key={`StudySelectBtn_${item.text}`}
              type="border"
              width="40%"
              height="80%"
              fontSize={2}
              smallFont={1.5}
              onClick={() => {
                navigate(item.link);
              }}>
              {item.text}
            </Button>
          );
        })}
      </Section>
    </Article>
  );
}
export default StudySelectPage;

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
