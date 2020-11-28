import React from 'react';
import { ScrollView, Text } from 'react-native';
import { StyledView } from './StyledView';

export default function JobDescriptionScreen() {
  return (
    <ScrollView>
      <StyledView>
        <Text>Saved Jobs</Text>
      </StyledView>
    </ScrollView>
  );
}
