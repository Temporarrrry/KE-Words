import React from "react";
import { styled } from "styled-components";
import Colors from "../../../lib/Colors";

type Props = {
  children: React.ReactNode;
  color?: "pink" | "blue";
  width?: string;
  height?: string;
  fontSize?: string;
};

const Text = ({
  children,
  color = "blue",
  width = "auto",
  height = "auto",
  fontSize = "1rem",
}: Props) => {
  return (
    <Div
      className={`${color}-text`}
      width={width}
      height={height}
      fontSize={fontSize}
      color={color}>
      {children}
    </Div>
  );
};

const Div = styled.div<{
  width: string;
  height: string;
  fontSize: string;
  color: "pink" | "blue";
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};
  fontsize: ${(props) => props.fontSize};
  color: ${(props) => (props.color === "blue" ? Colors.blue : Colors.pink)};
`;

export default Text;
