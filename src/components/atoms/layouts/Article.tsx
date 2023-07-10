import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  marginTop?: string;
};

function Article({ children, marginTop = "28dvh" }: Props) {
  return <Arti marginTop={marginTop}>{children}</Arti>;
}

export default Article;

interface StyleProps {
  marginTop: string;
}

const Arti = styled.article<StyleProps>`
  margin: ${(props) => `${props.marginTop} auto`};
  width: 600px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;
