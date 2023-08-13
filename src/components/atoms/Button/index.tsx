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
};

const Button = ({
  type = "bg",
  color = "blue",
  children,
  onClick,
  width = "70px",
  height = "50px",
  fontSize = 1,
  smallFont = 0.5,
}: Props) => {
  return (
    <Btn
      className={`${type} ${color}-button`}
      onClick={onClick}
      width={width}
      height={height}
      fontSize={fontSize}
      smallFont={smallFont}>
      {children}
    </Btn>
  );
};

const Btn = styled.button<{
  width: string;
  height: string;
  fontSize: number;
  smallFont?: number;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize}rem;
  @media screen and (max-width: 700px) {
    font-size: ${(props) => props.smallFont}rem;
  }
`;

export default Button;
