/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Markdown from 'react-native-markdown-display';
import { StyledText } from './StyledText';
import { StyledTouchableOpacity } from './StyledTouchableOpacity';
import { StyledView } from './StyledView';
import { storeData } from './AsyncStorageHelper';

export default function JobDescriptionScreen({ route }) {
  const { companyName, jobDesc, jobId, jobTitle } = route.params;
  return (
    <ScrollView>
      <StyledView viewType="jobDesc">
        <Markdown>{jobDesc}</Markdown>
      </StyledView>
      <StyledView viewType="flexSaveBtn">
        <StyledTouchableOpacity
          touchableType="descriptionBtn"
          onPress={() => {
            storeData({ id: jobId, companyName, jobDesc, jobTitle });
            alert('Job Saved to Favorites!');
          }}
        >
          <StyledText textType="descBtn">Save Job</StyledText>
        </StyledTouchableOpacity>
      </StyledView>
    </ScrollView>
  );
}

JobDescriptionScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      companyName: PropTypes.string.isRequired,
      jobDesc: PropTypes.string.isRequired,
      jobId: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
