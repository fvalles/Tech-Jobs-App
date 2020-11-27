/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import styled, { css } from 'styled-components/native';

export const StyledImage = styled.Image`
  ${({ imgType }) => {
    if (imgType === 'companyLogo') {
      return css`
        border-radius: 5px;
        height: 45px;
        margin-right: 15px;
        width: 45px;
      `;
    }
  }}

  ${({ imgType }) => {
    if (imgType === 'jobScreenIcon') {
      return css`
        height: 30px;
        margin-right: 5px;
        width: 30px;
      `;
    }
  }}
`;
