type Props = {
  width: string;
  height: string;
  src: string;
}

const Img = (props: Props) => {
  return (
    <img src={props.src} style={{width: props.width, height: props.height}} />
  )
}

Img.defaultProps = {
  width: "250px",
  height: "50px",
}

export default Img