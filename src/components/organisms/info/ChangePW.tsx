import React, { useState } from "react";
import styled from "styled-components";
import SpaceAroundCol from "../../atoms/layouts/SpaceAroundCol";
import Input from "../../atoms/Input";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";

function ChangePW() {
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");

  const changePw = () => {
    console.log(pw, pwConfirm);
  };

  return (
    <Section>
      <Text color="pink" fontSize="large">
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
            setValue={setPw}
            placeholder="PW"
            width="600px"
          />
          <Input
            type="password"
            value={pwConfirm}
            setValue={setPwConfirm}
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
