import { Link } from "react-router-dom";
import SpaceAround from "../../atoms/layouts/SpaceAround";
import Text from "../../atoms/Text";
import UserStore from "../../../stores/UserStore";

type Props = {};

const HeaderInfo = (props: Props) => {
	const {
		isLoggedIn,
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
			<Link to={isLoggedIn ? "/login" : `/info`}>
				<Text color="pink" fontSize="large">
					{isLoggedIn ? "로그인" : "내 정보"}
				</Text>
			</Link>
			{isLoggedIn ? (
				<Link to="/register">
					<Text color="pink" fontSize="large">
						회원가입
					</Text>
				</Link>
			) : (
				<button onClick={logout}>
					<Text color="pink" fontSize="large">
						로그아웃
					</Text>
				</button>
			)}
		</SpaceAround>
	);
};

export default HeaderInfo;
