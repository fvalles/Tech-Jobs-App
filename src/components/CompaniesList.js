/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React from 'react';
import { FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';
import { useQuery, gql } from '@apollo/client';
import styled from 'styled-components';
import CompanyLogo from './CompanyLogo';
import CompanyContainer from './CompanyContainer';
import CustomText from './CustomText';

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

  const renderItem = ({ item }) => {
    return (
      <CompanyContainer
        onPress={() => {
          navigation.navigate('Details', {
            companyName: item.name,
          });
        }}
      >
        <CompanyLogo imageUrl={item.logoUrl} />
        <CompanyInfoContainer>
          <CustomText>{item.name}</CustomText>
          <CompanyWebsite>{item.websiteUrl}</CompanyWebsite>
        </CompanyInfoContainer>
      </CompanyContainer>
    );
  };

  if (loading) return <Text>Loading Companies...</Text>;
  if (error) return <Text>Error :(. Check your internet connection and reload the App!</Text>;

  return (
    data && (
      <FlatList data={data.companies} renderItem={renderItem} keyExtractor={(item) => item.id} />
    )
  );
}

const CompanyInfoContainer = styled.View`
  width: 100%;
`;

const CompanyWebsite = styled.Text`
  color: blue;
`;

CompaniesList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
