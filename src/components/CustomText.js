/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// eslint-disable-next-line no-unused-vars
export default function CustomText({ children, companyName, jobTitle }) {
  return (
    <StyledText companyName jobTitle>
      {children}
    </StyledText>
  );
}

const StyledText = styled.Text`
  font-weight: bold;
  font-size: 20px;
  ${(props) => {
    if (props.companyName) {
      return css`
        margin-bottom: 5px;
      `;
    }
    if (props.jobTitle) {
      return css`
        margin-bottom: 10px;
      `;
    }
  }}
`;

CustomText.defaultProps = {
  companyName: null,
  jobTitle: null,
};

CustomText.propTypes = {
  children: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  companyName: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  jobTitle: PropTypes.any,
};
