/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// eslint-disable-next-line no-unused-vars
export default function FlexContainer({ onPress, children, companyContainer, companyJobs }) {
  return (
    <StyledFlexContainer onPress={onPress} companyContainer companyJobs>
      {children}
    </StyledFlexContainer>
  );
}

const StyledFlexContainer = styled.TouchableOpacity`
  background-color: #fff;
  width: 100%;
  ${(props) => {
    if (props.companyContainer) {
      return css`
        align-items: center;
        height: 100px;
        flex-direction: row;
        padding-left: 30px;
      `;
    }
    if (props.companyJobs) {
      return css`
        height: 100px;
        flex-direction: column;
        padding-left: 30px;
      `;
    }
  }};
`;

FlexContainer.defaultProps = {
  companyContainer: null,
  companyJobs: null,
  onPress: null,
};

FlexContainer.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  companyContainer: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  companyJobs: PropTypes.any,
  onPress: PropTypes.func,
};
