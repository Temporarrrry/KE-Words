import styled from "styled-components"

type Props = {
  children: React.ReactNode;
  gap: string;
}

const SpaceAround = (props: Props) => {
  return (
    <Div style={{gap: props.gap}}>{props.children}</Div>
  )
}

SpaceAround.defaultProps = {
  gap: "0px"
}

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export default SpaceAround