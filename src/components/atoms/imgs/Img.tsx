import styled from "styled-components";

type Props = {
	width: string;
	height: string;
	src: string;
};

const Img = (props: Props) => {
	return (
		<Image
			src={props.src}
			style={{ width: props.width, height: props.height }}
		/>
	);
};

Img.defaultProps = {
	width: "250px",
	height: "50px",
};

const Image = styled.img`
	object-fit: cover;
`;

export default Img;
