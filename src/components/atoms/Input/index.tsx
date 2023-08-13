"use client";

import React from "react";
import { styled } from "styled-components";

type Props = {
  type?: "text" | "email" | "color" | "datetime" | "password";
  placeholder?: string;
  value: any;
  onChange: any;
  width?: string;
  height?: string;
  border?: boolean;
  borderColor?: string;
  fontSize?: string;
};

const Input = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  width = "20dvw",
  height = "50px",
  border = true,
  borderColor = "black",
  fontSize = "1rem",
}: Props) => {
  return (
    <In
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      width={width}
      height={height}
      border={border}
      borderColor={borderColor}
      fontSize={fontSize}
    />
  );
};

const In = styled.input<{
  fontSize: string;
  width: string;
  height: string;
  border: boolean;
  borderColor: string;
}>`
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};
  border: ${(props) => (props.border ? "1px solid" : "0")};
  border-color: ${(props) => props.borderColor};
  color: ${(props) => props.borderColor};
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
`;

export default Input;
