import styled, { css } from 'styled-components';
import Colors from '../../../lib/Colors';

export interface ButtonLayoutProps {
	buttonType?: 'bg' | 'border';
	color?: "blue" | "pink";
}

export const blueBgButtonStyles = css`
  background-color: ${Colors.blue};
  color: white;
  border: 1px solid ${Colors.blue};
  
  &:hover {
    background-color: transparent;
    color: ${Colors.blue};
	}
`

export const pinkBgButtonStyles = css`
  background-color: ${Colors.pink};
  color: white;
  border: 1px solid ${Colors.pink};

  &:hover {
    background-color: transparent;
    color: ${Colors.pink};
	}
`

export const blueBorderedButtonStyles = css`
  background-color: transparent;
  color: ${Colors.blue};
  border: 1px solid ${Colors.blue};

  &:hover {
    background-color: ${Colors.blue};
    color: white;
  }
`

export const pinkBorderedButtonStyles = css`
  background-color: transparent;
  color: ${Colors.pink};
  border: 1px solid ${Colors.pink};
  
  &:hover {
    background-color: ${Colors.pink};
    color: white;
  }
`

export const ButtonLayout = styled.button<ButtonLayoutProps>`
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;

  ${({ buttonType, color }) => {
		switch (buttonType) {
			case 'bg':
        if (color === "blue")
          return blueBgButtonStyles;
        else 
          return pinkBgButtonStyles;
			case 'border':
				if (color === "blue")
          return blueBorderedButtonStyles;
        else 
          return pinkBorderedButtonStyles;
      default:
        return blueBgButtonStyles;
		}
	}}
`;

export default {
	ButtonLayout,
};