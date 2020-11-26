import React from 'react';
import styled from 'styled-components';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CompaniesList from './src/components/CompaniesList';
import SelectedCompanyJobs from './src/components/SelectedCompanyJobs';

const client = new ApolloClient({
  uri: 'https://api.graphql.jobs/',
  cache: new InMemoryCache(),
});

const Stack = createStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <MainContainer>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={CompaniesList} />
            <Stack.Screen
              name="Details"
              component={SelectedCompanyJobs}
              options={({ route }) => ({ title: `${route.params.companyName}'s Jobs` })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </MainContainer>
    </ApolloProvider>
  );
}

const MainContainer = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
`;
