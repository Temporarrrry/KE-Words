import React, { useState } from "react";
import styled from "styled-components";
import SpaceAroundCol from "../../atoms/layouts/SpaceAroundCol";
import Input from "../../atoms/Input";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import MemberApi from "../../../lib/api/MemberApi";

function ChangePW() {
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  const [newPw, setNewPw] = useState("");

  const changePw = () => {
    console.log(pw, pwConfirm);
    if (pw !== pwConfirm) {
      alert("서로 달라요...");
      return;
    }
    MemberApi.changePw(pw, newPw).then((res) => {
      setPw("");
      setPwConfirm("");
      setNewPw("");
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
        비밀번호 변경
      </Text>
      <form
        style={{ width: "100%" }}
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
            width="100%"
          />
          <Input
            type="password"
            value={pwConfirm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPwConfirm(e.target.value);
            }}
            placeholder="PW 확인"
            width="100%"
          />
          <Input
            type="password"
            value={newPw}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setNewPw(e.target.value);
            }}
            placeholder="새로운 PW"
            width="100%"
          />
          <AlignRight>
            <Button width="100px" height="50px" onClick={changePw}>
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
