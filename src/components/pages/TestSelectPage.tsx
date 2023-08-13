import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../atoms/Button";
import MainTitle from "../molecules/main/MainTitle";

type Props = {};

function TestSelectPage({}: Props) {
  const navigate = useNavigate();
  const component = [
    { link: "/test/word", text: "단어 시험보기" },
    { link: "/test/sentence", text: "문장 의미<br />시험보기" },
    { link: "/test/order", text: "문장 순서<br />시험보기" },
    { link: "/test/blank", text: "문장 빈칸<br />시험보기" },
  ];

  return (
    <Article>
      <MainTitle
        title="KE-Words"
        subTitle="한국어, 영어를 공부하는 사람들을 위한"
        gap="30px"
      />
      <Section>
        {component.map((item, idx) => {
          return (
            <Button
              type="border"
              width={`${idx === 0 ? "90%" : "25%"}`}
              height="40%"
              fontSize="40px"
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
export default TestSelectPage;

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
