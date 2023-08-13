import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  marginTop?: string;
};

function Article({ children, marginTop = "20dvh" }: Props) {
  return <Arti marginTop={marginTop}>{children}</Arti>;
}

export default Article;

interface StyleProps {
  marginTop: string;
}

const Arti = styled.article<StyleProps>`
  margin: 0 auto;
  margin-top: ${(props) => props.marginTop};
  width: 600px;
  height: 30dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  @media screen and (max-width: 700px) {
    width: 90dvw;
  }
`;
