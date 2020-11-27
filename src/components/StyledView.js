/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import styled, { css } from 'styled-components';

export const StyledView = styled.View`
  ${({ viewType }) => {
    if (viewType === 'locations') {
      return css`
        flex-direction: row;
        margin-bottom: 5px;
      `;
    }
  }}

  ${({ viewType }) => {
    if (viewType === 'flexCol') {
      return css`
        flex-direction: column;
      `;
    }
  }}

${({ viewType }) => {
    if (viewType === 'job') {
      return css`
        border-bottom-color: #c1c2bd;
        border-bottom-width: 1px;
        height: 100px;
        flex-direction: column;
        justify-content: center;
        padding-left: 30px;
      `;
    }
  }}
`;
