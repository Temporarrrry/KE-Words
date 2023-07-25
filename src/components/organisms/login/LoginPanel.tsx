import { useState } from "react";
import styled from "styled-components";
import SpaceAroundCol from "../../atoms/layouts/SpaceAroundCol";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Text from "../../atoms/Text";
import Hooks from "../../../lib/Hooks";
import UserStore from "../../../stores/UserStore";
import Article from "../../atoms/layouts/Article";

type Props = {};

const LoginPanel = (props: Props) => {
  const {
    setIsLoggedIn,
    setEmail,
    setId,
    setAccessToken,
    setRefreshToken,
    setLastWord,
    setLastSentence,
  } = UserStore();
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState("");
  const [pw, setPw] = useState("");

  const login: () => void = () => {
    Hooks.login(inputEmail, pw).then((res) => {
      if (res.status === 200) {
        setIsLoggedIn(true);
        setEmail(inputEmail);
        setId(res.data.id);
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        callback();
      }
    });
  };
  const callback: () => void = async () => {
    let lastWord = await Hooks.getLastWordId();
    let lastSentence = await Hooks.getLastSentenceId();
    if (lastWord.status === 200 && lastSentence.status === 200) {
      setLastWord(lastWord.data.wordId);
      setLastSentence(lastSentence.data.sentenceId);
      navigate("/");
    }
  };

  return (
    <Article>
      <Section>
        <Text color="pink" fontSize="large">
          로그인'^'
        </Text>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <SpaceAroundCol gap="30px">
            <Input
              type="email"
              value={inputEmail}
              setValue={setInputEmail}
              placeholder="Email"
              width="600px"
            />
            <Input
              type="password"
              value={pw}
              setValue={setPw}
              placeholder="PW"
              width="600px"
            />
            <Button width="600px" onClick={login}>
              로그인
            </Button>
          </SpaceAroundCol>
        </form>
      </Section>
    </Article>
  );
};

const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default LoginPanel;
