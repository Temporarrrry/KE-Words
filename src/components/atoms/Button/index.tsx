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
  fontSize?: string;
};

const Button = ({
  type = "bg",
  color = "blue",
  children,
  onClick,
  width = "70px",
  height = "30px",
  fontSize = "1rem",
}: Props) => {
  return (
    <Btn
      className={`${type} ${color}-button`}
      onClick={onClick}
      width={width}
      height={height}
      fontSize={fontSize}>
      {children}
    </Btn>
  );
};

const Btn = styled.button<{
  width: string;
  height: string;
  fontSize: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};
  fontsize: ${(props) => props.fontSize};
`;

export default Button;
