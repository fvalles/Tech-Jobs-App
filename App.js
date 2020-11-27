import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CompaniesList from './src/components/CompaniesList';
import SelectedCompanyJobs from './src/components/SelectedCompanyJobs';
import { StyledSafeAreaView } from './src/components/StyledSafeAreaView';

const client = new ApolloClient({
  uri: 'https://api.graphql.jobs/',
  cache: new InMemoryCache(),
});

const Stack = createStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <StyledSafeAreaView>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#D5D8D5',
              },
            }}
          >
            <Stack.Screen
              name="Home"
              component={CompaniesList}
              options={() => ({ title: 'Companies' })}
            />
            <Stack.Screen
              name="Details"
              component={SelectedCompanyJobs}
              options={({ route }) => ({ title: `${route.params.companyName}'s Jobs` })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </StyledSafeAreaView>
    </ApolloProvider>
  );
}
