/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import styled, { css } from 'styled-components';

export const StyledTouchableOpacity = styled.TouchableOpacity`
  ${({ touchableType }) => {
    if (touchableType === 'company') {
      return css`
        align-items: center;
        border-bottom-color: #c1c2bd;
        border-bottom-width: 1px;
        height: 100px;
        flex-direction: row;
        padding-left: 30px;
      `;
    }
  }}
`;
