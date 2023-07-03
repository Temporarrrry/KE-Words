import React from "react";
import ChangePW from "../organisms/info/ChangePW";
import styled from "styled-components";
import OtherInfo from "../organisms/info/OtherInfo";

type Props = {};

const InfoPage = (props: Props) => {
  return (
    <Article>
      <ChangePW />
      <OtherInfo />
    </Article>
  );
};

export default InfoPage;

const Article = styled.article`
  margin: 20vh auto;
  width: 600px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;
