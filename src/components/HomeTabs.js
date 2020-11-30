import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, AntDesign } from '@expo/vector-icons';
import CompaniesScreen from '../screens/CompaniesScreen';
import FavJobsScreen from '../screens/FavJobsScreen';
import { primaryColor, tertiaryColor, white } from '../constants/colors';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Companies"
      sceneContainerStyle={{ backgroundColor: white }}
      screenOptions={{
        backgroundColor: white,
      }}
      tabBarOptions={{
        style: {
          backgroundColor: primaryColor,
          height: 52,
        },
        inactiveTintColor: white,
        activeTintColor: tertiaryColor,
        labelStyle: { fontSize: 12 },
      }}
    >
      <Tab.Screen
        name="Companies"
        component={CompaniesScreen}
        options={{
          tabBarLabel: 'Companies',
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color, size }) => <Entypo name="rocket" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Saved Jobs"
        component={FavJobsScreen}
        options={{
          tabBarLabel: 'Saved Jobs',
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color, size }) => <AntDesign name="heart" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
