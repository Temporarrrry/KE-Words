import { Link } from "react-router-dom";
import Img from "../../atoms/imgs/Img";

type Props = {};

const Logo = (props: Props) => {
	return (
		<Link to="/">
			<Img src="../../../assets/logo.png" />
		</Link>
	);
};

export default Logo;
