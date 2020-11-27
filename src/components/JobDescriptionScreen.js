import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Markdown from 'react-native-markdown-display';
import { StyledView } from './StyledView';

export default function JobDescriptionScreen({ route }) {
  const { jobDesc } = route.params;
  return (
    <ScrollView>
      <StyledView viewType="jobDesc">
        <Markdown>{jobDesc}</Markdown>
      </StyledView>
    </ScrollView>
  );
}

JobDescriptionScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      jobDesc: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
