import React, { useState } from "react";
import SpaceAroundCol from "../../atoms/layouts/SpaceAroundCol";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Text from "../../atoms/Text";
import { useNavigate } from "react-router-dom";
import Hooks from "../../../lib/Hooks";
import Article from "../../atoms/layouts/Article";
import { styled } from "styled-components";

type Props = {};

function RegisterPanel({}: Props) {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfrim, setPwConfrim] = useState("");

  const register: () => void = () => {
    if (pw !== pwConfrim) {
      alert("비밀번호가 맞지 않아요...");
      setPw("");
      setPwConfrim("");
      return;
    }
    Hooks.chkEmailDuplicate(inputEmail).then((res) => {
      if (res.status === 200) {
        Hooks.register(inputEmail, pw).then((res) => {
          if (res.status === 201) {
            navigate("/login");
          }
        });
      } else {
        alert("이미 등록된 이메일이 있어요...");
      }
    });
  };

  return (
    <Article>
      <Text color="pink" fontSize={3} smallFont={2}>
        회원가입
      </Text>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <SpaceAroundCol gap="30px">
          <Input
            type="email"
            value={inputEmail}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInputEmail(e.target.value);
            }}
            placeholder="Email"
            width="100%"
          />
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
            value={pwConfrim}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPwConfrim(e.target.value);
            }}
            placeholder="PW"
            width="100%"
          />
          <Button width="100%" onClick={register}>
            로그인
          </Button>
        </SpaceAroundCol>
      </Form>
    </Article>
  );
}

const Form = styled.form`
  width: 100%;
`;

export default RegisterPanel;
