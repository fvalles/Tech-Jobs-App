import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default function SelectedCompanyJobs({ route }) {
  const { companyName } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen of the company: {companyName}</Text>
    </View>
  );
}

SelectedCompanyJobs.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      companyName: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
