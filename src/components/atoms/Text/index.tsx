import React from "react";
import { styled } from "styled-components";
import Colors from "../../../lib/Colors";

type Props = {
  children: React.ReactNode;
  color?: "pink" | "blue";
  width?: string;
  height?: string;
  fontSize?: number;
  smallFont?: number;
};

const Text = ({
  children,
  color = "blue",
  width = "auto",
  height = "auto",
  fontSize = 1,
  smallFont = 0.5,
}: Props) => {
  return (
    <Div
      className={`${color}-text`}
      width={width}
      height={height}
      fontSize={fontSize}
      smallFont={smallFont}
      color={color}>
      {children}
    </Div>
  );
};

const Div = styled.div<{
  width: string;
  height: string;
  fontSize: number;
  smallFont: number;
  color: "pink" | "blue";
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize}rem;
  color: ${(props) => (props.color === "blue" ? Colors.blue : Colors.pink)};
  @media screen and (max-width: 700px) {
    font-size: ${(props) => props.smallFont}rem;
  }
`;

export default Text;
