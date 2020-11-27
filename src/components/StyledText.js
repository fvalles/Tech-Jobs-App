/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import styled, { css } from 'styled-components';

export const StyledText = styled.Text`
  font-size: 16px;

  ${({ textType }) => {
    if (textType === 'companyName') {
      return css`
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 5px;
      `;
    }
  }}

  ${({ textType }) => {
    if (textType === 'companyWebsite') {
      return css`
        color: blue;
        font-size: 14px;
      `;
    }
  }}

${({ textType }) => {
    if (textType === 'descBtn') {
      return css`
        color: white;
        font-weight: bold;
        text-align: center;
      `;
    }
  }}

${({ textType }) => {
    if (textType === 'jobTitle') {
      return css`
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
      `;
    }
  }}

${({ textType }) => {
    if (textType === 'remote') {
      return css`
        font-style: italic;
      `;
    }
  }}
`;
