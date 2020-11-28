import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, AntDesign } from '@expo/vector-icons';
import CompaniesScreen from './CompaniesScreen';
import FavJobsScreen from './FavJobsScreen';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Companies"
      sceneContainerStyle={{ backgroundColor: '#fff' }}
      screenOptions={{
        backgroundColor: '#fff',
      }}
      tabBarOptions={{
        style: {
          backgroundColor: '#212121',
          height: 52,
        },
        inactiveTintColor: '#fff',
        activeTintColor: '#32e0c4',
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
          tabBarLabel: 'Companies',
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color, size }) => <AntDesign name="heart" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
