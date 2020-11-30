import React from 'react';
import PropTypes from 'prop-types';
import { StyledText } from './StyledText';
import { StyledView } from './StyledView';

export default function ErrorScreen({ children }) {
  return (
    <StyledView viewType="noJobsView">
      <StyledText textType="noJobsMsg">{children}</StyledText>
    </StyledView>
  );
}

ErrorScreen.propTypes = {
  children: PropTypes.string.isRequired,
};
