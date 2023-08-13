import { Link } from "react-router-dom";
import SpaceAround from "../../atoms/layouts/SpaceAround";
import UserStore from "../../../stores/UserStore";
import Text from "../../atoms/Text";

type Props = {};

const HeaderInfo = (props: Props) => {
  const {
    isLoggedIn,
    email,
    setIsLoggedIn,
    setEmail,
    setId,
    setAccessToken,
    setRefreshToken,
  } = UserStore();

  const logout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setId(-1);
    setAccessToken("");
    setRefreshToken("");
  };
  return (
    <SpaceAround gap="30px">
      <Link to={isLoggedIn ? "/info" : "/login"}>
        <Text color="pink" fontSize="large">
          {isLoggedIn ? email.split("@")[0] : "로그인"}
        </Text>
      </Link>
      {isLoggedIn ? (
        <button onClick={logout}>
          <Text color="pink" fontSize="large">
            로그아웃
          </Text>
        </button>
      ) : (
        <Link to="/register">
          <Text color="pink" fontSize="large">
            회원가입
          </Text>
        </Link>
      )}
    </SpaceAround>
  );
};

export default HeaderInfo;
