/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React from 'react';
import { FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';
import { useQuery, gql } from '@apollo/client';
import styled from 'styled-components';
import CompanyLogo from './CompanyLogo';
import CustomText from './CustomText';
import FlexContainer from './FlexContainer';

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
      <FlexContainer
        onPress={() => {
          navigation.navigate('Details', {
            companyName: item.name,
          });
        }}
        companyContainer
      >
        <CompanyLogo imageUrl={item.logoUrl} />
        <CompanyInfoContainer>
          <CustomText companyName>{item.name}</CustomText>
          <CompanyWebsite>{item.websiteUrl}</CompanyWebsite>
        </CompanyInfoContainer>
      </FlexContainer>
    );
  };

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
