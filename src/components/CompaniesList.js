import React from 'react';
import { FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';
import { useQuery, gql } from '@apollo/client';
import CompanyLogo from './CompanyLogo';
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

export default function CompaniesList({ navigation }) {
  const { loading, error, data } = useQuery(COMPANIES_DATA);

  if (loading) return <Text>Loading Companies...</Text>;
  if (error) return <Text>Error :(. Check your internet connection and reload the App!</Text>;

  const renderItem = ({ item }) => {
    return (
      <StyledTouchableOpacity
        onPress={() => {
          navigation.navigate('Details', {
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
      <FlatList data={data.companies} renderItem={renderItem} keyExtractor={(item) => item.id} />
    )
  );
}

CompaniesList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
