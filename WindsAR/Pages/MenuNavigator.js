import * as React from 'react';
import {Button, View, StyleSheet, ImageBackground} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import BarsButton from 'react-native-vector-icons/FontAwesome';
import HomePage from './HomePage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from 'react-native-reanimated';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import MenuContent from './MenuContent';
const Drawer = createDrawerNavigator();

const MenuNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <MenuContent {...props} />}
        initialRouteName="HomePage"
        drawerStyle={{width: wp('100%')}}>
        <Drawer.Screen name="HomePage" component={HomePage}></Drawer.Screen>
        <Drawer.Screen name="Login" component={LoginPage}></Drawer.Screen>
        <Drawer.Screen name="Signup" component={SignupPage}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MenuNavigator;
