import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  gap: string;
  direction: "row" | "column" | "row-reverse" | "column-reverse";
  align: string;
  width: string;
  height: string;
};

const Flex = (props: Props) => {
  return (
    <Div
      style={{
        gap: props.gap,
        flexDirection: props.direction,
        justifyContent: props.align,
      }}>
      {props.children}
    </Div>
  );
};

Flex.defaultProps = {
  gap: "0px",
  direction: "row",
  align: "flex-start",
  width: "auto",
  height: "auto",
};

const Div = styled.div`
  display: flex;
  align-items: center;
`;

export default Flex;
