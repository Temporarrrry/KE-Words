import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MemberApi from "../../lib/api/MemberApi";
import Article from "../atoms/layouts/Article";
import Text from "../atoms/Text";
import SpaceAroundCol from "../atoms/layouts/SpaceAroundCol";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const RegisterPage = () => {
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
    MemberApi.chkEmailDuplicate(inputEmail).then((res) => {
      if (res.status === 200) {
        MemberApi.register(inputEmail, pw).then((res) => {
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
            회원가입
          </Button>
        </SpaceAroundCol>
      </Form>
    </Article>
  );
};

const Form = styled.form`
  width: 100%;
`;

export default RegisterPage;
