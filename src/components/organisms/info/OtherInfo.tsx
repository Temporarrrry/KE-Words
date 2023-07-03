import React, { useState } from "react";
import styled from "styled-components";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import { useNavigate } from "react-router-dom";

function OtherInfo() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [allProblems, setAllProblems] = useState(0);

  return (
    <Section>
      <Row>
        <Text fontSize="large" color="pink">
          시험 결과
        </Text>
        <Span>
          <Text color="pink">{`${score} / ${allProblems}`}</Text>
          <Button
            buttonType="border"
            color="pink"
            width="100px"
            onClick={() => {
              navigate("/quiz/list");
            }}>
            상세보기
          </Button>
        </Span>
      </Row>
    </Section>
  );
}

export default OtherInfo;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Span = styled.span`
  display: flex;
  gap: 20px;
  align-items: center;
`;
