import React from 'react';
import { Linking, FlatList, Text } from "react-native";
import { useQuery, gql } from '@apollo/client';
import styled from 'styled-components'

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

  const goToWebSite = (websiteUrl) => {
    Linking.openURL(websiteUrl);
  }

  const renderItem = ({ item }) => {
    return (
      <>
        <CompanyContainer>
          {
            item.logoUrl !== '' &&
            <CompanyLogo source={{uri: item.logoUrl}} />
          }
          <CompanyInfoContainer>
            <CompanyName>
              {item.name}
            </CompanyName>
            <CompanyWebsite onPress={() => {goToWebSite(item.websiteUrl)}}>
              Website
            </CompanyWebsite>
          </CompanyInfoContainer>
        </CompanyContainer>
      </>
    )
  }

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  return (
    data && <FlatList
      data={data.companies}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  )
}

const CompanyContainer = styled.View`
  align-items: center;
  flex-direction: row;
  height: 100px;
  padding-left: 30px;
  width: 100%;
`

const CompanyInfoContainer = styled.View`
  width: 100%;
`

const CompanyLogo = styled.Image`
  border-radius: 5px;
  height: 45px;
  margin-right: 15px;
  width: 45px;
`

const CompanyName = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
`

const CompanyWebsite = styled.Text`
  color: blue;
`
