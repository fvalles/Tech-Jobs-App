import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import CompanyLogo from '../components/CompanyLogo';
import Animation from '../components/Animation';
import ErrorScreen from './ErrorScreen';
import { COMPANIES_DATA } from '../queries/companiesQueries';
import { StyledText } from '../components/StyledText';
import { StyledTouchableOpacity } from '../components/StyledTouchableOpacity';
import { StyledView } from '../components/StyledView';

export default function CompaniesScreen({ navigation }) {
  const { loading, error, data } = useQuery(COMPANIES_DATA);

  if (loading) return <Animation animationType="loader" />;
  if (error)
    return <ErrorScreen>Error :(. Check your internet connection and reload the App!</ErrorScreen>;

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
