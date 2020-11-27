/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import styled, { css } from 'styled-components';

export const StyledView = styled.View`
  ${({ viewType }) => {
    if (viewType === 'commitmentRow') {
      return css`
        align-items: center;
        flex-direction: row;
      `;
    }
  }}

  ${({ viewType }) => {
    if (viewType === 'flexCenterRow') {
      return css`
        align-items: center;
        flex-direction: row;
        justify-content: center;
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
        height: 190px;
        flex-direction: column;
        justify-content: center;
        padding-left: 30px;
      `;
    }
  }}

${({ viewType }) => {
    if (viewType === 'jobDesc') {
      return css`
        padding: 5px 15px;
      `;
    }
  }}

${({ viewType }) => {
    if (viewType === 'locationsRow') {
      return css`
        align-items: center;
        flex-direction: row;
        margin-bottom: 5px;
      `;
    }
  }}

${({ viewType }) => {
    if (viewType === 'noJobsView') {
      return css`
        align-items: center;
        flex: 1;
        justify-content: center;
      `;
    }
  }}
`;
