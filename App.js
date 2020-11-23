import React from 'react';
import { Linking } from "react-native";
import styled from 'styled-components';

export default function App() {
  const goToWebSite = (websiteUrl) => {
    Linking.openURL(websiteUrl);
  }

  return (
    <MainContainer>
      <CompanyContainer>
        <CompanyLogo source={{uri: 'https://cdn.filestackcontent.com/uRGQ5QfTT8mforGeyUS5'}} />
        <CompanyInfoContainer>
          <CompanyName>
            Apollo
          </CompanyName>
          <CompanyWebsite onPress={() => {goToWebSite('https://www.apollographql.com/')}}>
            Open Company Website
          </CompanyWebsite>
        </CompanyInfoContainer>
      </CompanyContainer>
    </MainContainer>
  );
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
  margin-right: 10px;
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

const MainContainer = styled.SafeAreaView`
  background-color: #FFF;
  flex: 1;
`
