import React, { useState } from "react";
import styled from "styled-components";
import SpaceAroundCol from "../../atoms/layouts/SpaceAroundCol";
import Input from "../../atoms/Input";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import Hooks from "../../../lib/Hooks";

function ChangePW() {
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");

  const changePw = () => {
    console.log(pw, pwConfirm);
    if (pw !== pwConfirm) {
      alert("서로 달라요...");
      return;
    }
    Hooks.changePw(pw).then((res) => {
      setPw("");
      setPwConfirm("");
      if (res.status === 200) {
        alert("변경 완료!");
      } else {
        alert("뭔가 이상해요...");
      }
    });
  };

  return (
    <Section>
      <Text color="pink" fontSize={3} smallFont={2}>
        내 정보'^'
      </Text>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <SpaceAroundCol gap="30px">
          <Input
            type="password"
            value={pw}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPw(e.target.value);
            }}
            placeholder="PW"
            width="600px"
          />
          <Input
            type="password"
            value={pwConfirm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPwConfirm(e.target.value);
            }}
            placeholder="PW 확인"
            width="600px"
          />
          <AlignRight>
            <Button width="100px" onClick={changePw}>
              변경하기
            </Button>
          </AlignRight>
        </SpaceAroundCol>
      </form>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

const AlignRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export default ChangePW;
