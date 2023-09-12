import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";
import Img from "../../atoms/imgs/Img";
import { useEffect } from "react";
import UserStore from "../../../stores/UserStore";
import MemberApi from "../../../lib/api/MemberApi";
import SpaceAround from "../../atoms/layouts/SpaceAround";
import Text from "../../atoms/Text";

const Header = () => {
  const navigate = useNavigate();
  const isMobile: boolean = useMediaQuery({
    query: "(max-width: 700px)",
  });

  const { isLoggedIn, email, setIsLoggedIn, setId, setEmail } = UserStore();
  useEffect(() => {
    const token = localStorage.getItem("KE_accessToken");
    if (!isLoggedIn && token) {
      console.log("토큰 다시 파싱");
      let info = MemberApi.parseJwt(localStorage.getItem("KE_accessToken")!);
      console.log(info);
      setId(info.userId);
      setEmail(info.userEmail);
      setIsLoggedIn(true);
    } else {
      console.log("토큰 없음");
    }
  }, []);

  const logout = () => {
    console.log("Log Out");
    localStorage.removeItem("KE_accessToken");
    localStorage.removeItem("KE_refreshToken");
    setIsLoggedIn(false);
    setId(-1);
    setEmail("");
    navigate("/");
  };

  return (
    <Head>
      {isMobile ? (
        <Link to="/">
          <Img
            src="https://github.com/Temporarrrry/KE-Words_Front/blob/main/public/Favicon.png?raw=true"
            width="50px"
            height="50px"
          />
        </Link>
      ) : (
        <Link to="/">
          <Img src="https://github.com/Temporarrrry/KE-Words_Front/blob/main/public/logo_small.png?raw=true" />
        </Link>
      )}
      <SpaceAround gap="30px">
        <Link to={isLoggedIn ? "/info" : "/login"}>
          <Text color="pink" fontSize={2} smallFont={1.5}>
            {isLoggedIn && email !== "" ? email.split("@")[0] : "로그인"}
          </Text>
        </Link>
        {isLoggedIn ? (
          <button onClick={logout}>
            <Text color="pink" fontSize={2} smallFont={1.5}>
              로그아웃
            </Text>
          </button>
        ) : (
          <Link to="/register">
            <Text color="pink" fontSize={2} smallFont={1.5}>
              회원가입
            </Text>
          </Link>
        )}
      </SpaceAround>
    </Head>
  );
};

const Head = styled.header`
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding-right: 30px;
`;

export default Header;
