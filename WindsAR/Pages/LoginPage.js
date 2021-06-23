import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LoginComponent from '../SubPages/LoginComponent';
import BackArrow from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const LoginPage = ({navigation}) => {
  return (
    <>
      <View style={{backgroundColor: 'white'}}>
        <BackArrow
          name="arrow-back"
          size={wp('8%')}
          style={styles.backButtonStyle}
          onPress={() => navigation.goBack()}></BackArrow>
      </View>
      <View style={styles.customMargin}>
        <Text style={styles.text}> Login</Text>
      </View>
      <LoginComponent navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: hp('5%'),
    fontWeight: 'bold',
    color: 'rgba(0, 36, 86, 1)',
  },
  customMargin: {
    flex: 0.45,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: hp('1%'),
    backgroundColor: 'white',
  },
  backButtonStyle: {
    paddingLeft: wp('1%'),
    paddingTop: hp('1%'),
    backgroundColor: 'white',
    width: wp('9%'),
  },
});

export default LoginPage;
