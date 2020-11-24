import React from 'react';
import styled from 'styled-components';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import CompaniesList from './src/components/CompaniesList'

const client = new ApolloClient({
  uri: 'https://api.graphql.jobs/',
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <MainContainer>
        <CompaniesList />
      </MainContainer>
    </ApolloProvider>
  );
}

const MainContainer = styled.SafeAreaView`
  background-color: #FFF;
  flex: 1;
`
