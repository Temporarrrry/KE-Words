import styled from "styled-components";
import HeaderInfo from "../../molecules/header/HeaderInfo";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import Img from "../../atoms/imgs/Img";

type Props = {};

const Header = (props: Props) => {
  const isMobile: boolean = useMediaQuery({
    query: "(max-width: 700px)",
  });
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
