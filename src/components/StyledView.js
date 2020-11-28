/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import styled, { css } from 'styled-components/native';

export const StyledView = styled.View`
  background-color: #fff;
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
    if (viewType === 'homeScreenTitle') {
      return css`
        background-color: #0d7377;
        height: 60px;
        flex-direction: row;
        align-items: center;
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
    if (viewType === 'jobInfo') {
      return css`
        padding-left: 30px;
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
