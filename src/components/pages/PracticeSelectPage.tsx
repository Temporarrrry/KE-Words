import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../atoms/Button";
import MainTitle from "../molecules/main/MainTitle";

function PracticeSelectPage() {
  const navigate = useNavigate();
  const component = [
    { link: "/practice/word", text: "단어 연습하기" },
    { link: "/practice/sentence", text: "문장 의미 연습하기" },
    { link: "/practice/order", text: "문장 순서 연습하기" },
    { link: "/practice/blank", text: "문장 빈칸 연습하기" },
  ];

  return (
    <Article>
      <MainTitle />
      <Section>
        {component.map((item, idx) => {
          return (
            <Button
              key={`PracticeSelectBtn_${item.text}`}
              type="border"
              width={`${idx === 0 ? "90%" : "25%"}`}
              height="40%"
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
export default PracticeSelectPage;

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
