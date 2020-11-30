/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import styled, { css } from 'styled-components/native';
import { grayNickel, tertiaryColor, white } from '../constants/colors';

export const StyledTouchableOpacity = styled.TouchableOpacity`
  ${({ touchableType }) => {
    if (touchableType === 'company') {
      return css`
        align-items: center;
        background-color: ${white};
        border-bottom-color: ${grayNickel};
        border-bottom-width: 1px;
        height: 100px;
        flex-direction: row;
        padding-left: 30px;
      `;
    }
  }}

  ${({ touchableType }) => {
    if (touchableType === 'descriptionBtn') {
      return css`
        background-color: ${tertiaryColor};
        border-radius: 35px;
        margin-top: 5px;
        margin-bottom: 5px;
        padding: 15px;
        width: 140px;
      `;
    }
  }}
`;
