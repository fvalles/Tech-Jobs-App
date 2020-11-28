import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabs from './src/components/HomeTabs';
import CompanyJobsScreen from './src/components/CompanyJobsScreen';
import JobDescriptionScreen from './src/components/JobDescriptionScreen';
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
              cardStyle: { backgroundColor: '#fff' },
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: '#212121',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            <Stack.Screen
              name="Home"
              component={HomeTabs}
              options={() => ({ title: 'Ank Challenge' })}
            />
            <Stack.Screen
              name="CompanyJobs"
              component={CompanyJobsScreen}
              options={({ route }) => ({ title: `${route.params.companyName}'s Jobs` })}
            />
            <Stack.Screen
              name="JobDescription"
              component={JobDescriptionScreen}
              options={() => ({ title: 'Job Description' })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </StyledSafeAreaView>
    </ApolloProvider>
  );
}
