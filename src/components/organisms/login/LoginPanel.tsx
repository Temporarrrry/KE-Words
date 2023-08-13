import { ReactHTML, useState } from "react";
import SpaceAroundCol from "../../atoms/layouts/SpaceAroundCol";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Text from "../../atoms/Text";
import Hooks from "../../../lib/Hooks";
import UserStore from "../../../stores/UserStore";
import Article from "../../atoms/layouts/Article";
import { styled } from "styled-components";
import Modal from "../../atoms/layouts/Modal";

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
  const [isModalOpened, setIsModalOpened] = useState(false);

  const login: () => void = () => {
    Hooks.login(inputEmail, pw).then((res) => {
      if (res.status === 200) {
        setIsLoggedIn(true);
        setEmail(inputEmail);
        setId(res.data.id);
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        callback();
      } else {
        setIsModalOpened(true);
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
      <Text color="pink" fontSize={3} smallFont={2}>
        로그인
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
          <Button width="100%" onClick={login}>
            로그인
          </Button>
        </SpaceAroundCol>
      </Form>
      {isModalOpened && (
        <Modal
          type={2}
          closeModal={() => {
            setIsModalOpened(false);
          }}>
          <Text>로그인에 실패했습니다.</Text>
        </Modal>
      )}
    </Article>
  );
};

const Form = styled.form`
  width: 100%;
`;

export default LoginPanel;
