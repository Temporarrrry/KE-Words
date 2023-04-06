import styled, { css } from 'styled-components';
import Colors from '../../../lib/Colors';
import { pinkBorderedButtonStyles } from '../Button/styles';

export interface InputLayoutProps {
	color?: "blue" | "pink";
}

export const blueBorderInputStyles = css`
  border: 1px solid ${Colors.blue};
`
export const pinkBorderInputStyles = css`
  border: 1px solid ${Colors.pink};
`

export const InputLayout = styled.input<InputLayoutProps>`
  padding-left: 10px;
	border-radius: 10px;

  ${({ color }) => {
		switch (color) {
			case 'blue':
        return blueBorderInputStyles;
			case 'pink':
        return pinkBorderedButtonStyles;
      default:
        return blueBorderInputStyles;
		}
	}}
`;

export default {
	InputLayout,
};