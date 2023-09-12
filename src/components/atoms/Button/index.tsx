"use client";

import React from "react";
import "./Button.css";
import { styled } from "styled-components";

type Props = {
  type?: string;
  color?: "blue" | "pink";
  children: React.ReactNode;
  onClick: () => void;
  width?: string;
  height?: string;
  fontSize?: number;
  smallFont?: number;
  padding?: string;
  smallpadding?: string;
};

const Button = ({
  type = "bg",
  color = "blue",
  children,
  onClick,
  width = "auto",
  height = "auto",
  fontSize = 1,
  smallFont = 0.5,
  padding = "0px",
  smallpadding = "0px",
}: Props) => {
  return (
    <Btn
      className={`${type} ${color}-button`}
      onClick={onClick}
      width={width}
      height={height}
      fontSize={fontSize}
      smallFont={smallFont}
      padding={padding}
      smallpadding={smallpadding}>
      {children}
    </Btn>
  );
};

const Btn = styled.button<{
  width: string;
  height: string;
  fontSize: number;
  smallFont?: number;
  padding?: string;
  smallpadding?: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  vertical-align: middle;
  text-align: center;
  font-size: ${(props) => props.fontSize}rem;
  padding: ${(props) => props.padding};
  @media screen and (max-width: 700px) {
    font-size: ${(props) => props.smallFont}rem;
    padding: ${(props) => props.smallpadding};
  }
`;

export default Button;
