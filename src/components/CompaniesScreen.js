import React from 'react';
import { FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';
import { useQuery, gql } from '@apollo/client';
import CompanyLogo from './CompanyLogo';
import Animation from './Animation';
import { StyledText } from './StyledText';
import { StyledTouchableOpacity } from './StyledTouchableOpacity';
import { StyledView } from './StyledView';

const COMPANIES_DATA = gql`
  query CompaniesData {
    companies {
      id
      name
      logoUrl
      websiteUrl
    }
  }
`;

export default function CompaniesScreen({ navigation }) {
  const { loading, error, data } = useQuery(COMPANIES_DATA);

  if (loading) return <Animation animationType="loader" />;
  if (error) return <Text>Error :(. Check your internet connection and reload the App!</Text>;

  const renderItem = ({ item }) => {
    return (
      <StyledTouchableOpacity
        onPress={() => {
          navigation.navigate('CompanyJobs', {
            companyName: item.name,
          });
        }}
        touchableType="company"
      >
        <CompanyLogo imageUrl={item.logoUrl} />
        <StyledView viewType="flexCol">
          <StyledText textType="companyName">{item.name}</StyledText>
          <StyledText textType="companyWebsite">{item.websiteUrl}</StyledText>
        </StyledView>
      </StyledTouchableOpacity>
    );
  };

  return (
    data && (
      <>
        <StyledView viewType="homeScreenTitle">
          <StyledText textType="mainTitle">Companies</StyledText>
        </StyledView>
        <FlatList data={data.companies} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </>
    )
  );
}

CompaniesScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
