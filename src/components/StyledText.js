/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import styled, { css } from 'styled-components/native';

export const StyledText = styled.Text`
  font-size: 16px;

  ${({ textType }) => {
    if (textType === 'companyName') {
      return css`
        color: #212121;
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
        color: #212121;
        font-weight: bold;
        text-align: center;
      `;
    }
  }}

${({ textType }) => {
    if (textType === 'jobTitle') {
      return css`
        color: #212121;
        font-size: 18px;
        font-weight: bold;
        margin: 0 30px 10px 0;
      `;
    }
  }}

${({ textType }) => {
    if (textType === 'mainTitle') {
      return css`
        color: #fff;
        font-weight: bold;
        font-size: 22px;
        margin-left: 30px;
      `;
    }
  }}

${({ textType }) => {
    if (textType === 'noJobsMsg') {
      return css`
        margin-bottom: 15px;
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
