import { Link } from "react-router-dom";
import SpaceAround from "../../atoms/layouts/SpaceAround";
import PinkText from "../../atoms/texts/PinkText";

type Props = {};

const HeaderInfo = (props: Props) => {
	return (
		<SpaceAround gap="30px">
			<Link to="/login">
				<PinkText>로그인</PinkText>
			</Link>
			<Link to="/register">
				<PinkText>회원가입</PinkText>
			</Link>
		</SpaceAround>
	);
};

export default HeaderInfo;
