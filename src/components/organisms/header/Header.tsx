import styled from "styled-components";
import HeaderInfo from "../../molecules/header/HeaderInfo";
import Logo from "../../molecules/header/Logo";

type Props = {};

const Header = (props: Props) => {
	return (
		<Head>
			<Logo />
			<HeaderInfo />
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
