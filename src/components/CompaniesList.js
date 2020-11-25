import React from 'react';
import { FlatList, Text } from "react-native";
import { useQuery, gql } from '@apollo/client';
import styled from 'styled-components'
import CompanyLogo from './CompanyLogo'
import CompanyContainer from './CompanyContainer'
import CustomText from './CustomText'

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

export default function CompaniesList() {
  const { loading, error, data } = useQuery(COMPANIES_DATA);

  const renderItem = ({ item }) => {
    return (
      <CompanyContainer onPress={() => {alert(`Company clicked: ${item.name}`)}}>
        <CompanyLogo imageUrl={item.logoUrl} />
        <CompanyInfoContainer>
          <CustomText>
            {item.name}
          </CustomText>
          <CompanyWebsite>
            {item.websiteUrl}
          </CompanyWebsite>
        </CompanyInfoContainer>
      </CompanyContainer>
    )
  }

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error Loading Companies Data :(</Text>;

  return (
    data && <FlatList
      data={data.companies}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  )
}

const CompanyInfoContainer = styled.View`
  width: 100%;
`

const CompanyWebsite = styled.Text`
  color: blue;
`
