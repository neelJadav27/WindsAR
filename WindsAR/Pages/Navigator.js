import {createStackNavigator} from '@react-navigation/stack';
import {
  createAppContainer,
  NavigationContainer,
} from '@react-navigation/native';
import React, {useState} from 'react';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import SignupAs from './SignupAs';
const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" component={LandingPage}>
        <Stack.Screen
          name="Welcome"
          component={LandingPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignupAs"
          component={SignupAs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignupPage"
          component={SignupPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
