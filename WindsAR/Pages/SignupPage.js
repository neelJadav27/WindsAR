import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SignupComponent from '../SubPages/SignupComponent';
import BackArrow from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const SignupPage = ({navigation}) => {
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
        <Text style={styles.text}> Sign up</Text>
      </View>
      <SignupComponent navigation={navigation}></SignupComponent>
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
    flex: 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: hp('1%'),
  },
  backButtonStyle: {
    paddingLeft: wp('1%'),
    paddingTop: hp('1%'),
    backgroundColor: 'white',
    width: wp('9%'),
  },
});
export default SignupPage;
