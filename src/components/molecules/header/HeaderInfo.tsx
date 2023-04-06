import { Link } from "react-router-dom";
import SpaceAround from "../../atoms/layouts/SpaceAround";
import Text from "../../atoms/Text";

type Props = {};

const HeaderInfo = (props: Props) => {
	return (
		<SpaceAround gap="30px">
			<Link to="/login">
				<Text color="pink" fontSize="large">
					로그인
				</Text>
			</Link>
			<Link to="/register">
				<Text color="pink" fontSize="large">
					회원가입
				</Text>
			</Link>
		</SpaceAround>
	);
};

export default HeaderInfo;
