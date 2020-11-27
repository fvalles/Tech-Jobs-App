/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import styled, { css } from 'styled-components';

export const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color: #fff;

  ${({ containerType }) => {
    if (containerType === 'company') {
      return css`
        align-items: center;
        height: 100px;
        flex-direction: row;
        padding-left: 30px;
      `;
    }
  }}

  ${({ containerType }) => {
    if (containerType === 'job') {
      return css`
        height: 100px;
        flex-direction: column;
        padding-left: 30px;
      `;
    }
  }}
`;
