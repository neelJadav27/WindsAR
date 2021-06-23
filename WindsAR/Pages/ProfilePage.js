import * as React from 'react';
import {
  Button,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import RoundC from 'react-native-vector-icons/FontAwesome';
import HomePage from './HomePage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from 'react-native-reanimated';

const ProfilePage = () => {
  return (
    <>
      <View style={styles.half1}>
        <View style={styles.half2}>
          <Text style={styles.text}>Profile</Text>

          <View style={styles.dashedCircle}>
            <Image
              style={styles.imageStyle}
              source={require('../Images/Smit2.jpg')}></Image>
          </View>
          <Text style={styles.text2}>Hello, Smitkumar Patel</Text>
          <Text style={styles.text3}>22 | smit@gmail.com</Text>
          <View style={styles.uwinCoins}>
            <Text style={styles.uwinCoinsText1}>9995</Text>
            <Text style={styles.uwinCoinsText2}>WinCoins</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: hp('5%'),
    fontWeight: 'bold',
    fontSize: hp('2.7%'),
    color: 'rgba(0, 36, 86, 1)',
  },
  text2: {
    marginTop: hp('2.7%'),
    fontSize: hp('2.4%'),
    color: 'rgba(0, 36, 86, 1)',
  },
  text3: {
    fontSize: hp('2%'),
    color: 'rgba(0, 36, 86, 1)',
  },
  uwinCoins: {
    marginTop: hp('4%'),
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('10%'),
    width: wp('45%'),
    backgroundColor: 'rgba(0, 36, 86, 1)',
    borderRadius: hp('5%'),
  },
  uwinCoinsText1: {
    fontSize: hp('3%'),
    color: 'gold',
    fontWeight: 'bold',
  },
  uwinCoinsText2: {
    fontSize: hp('2.3%'),
    color: 'white',
  },
  half1: {
    backgroundColor: 'rgba(0, 36, 86, 1)',
    flex: 1,
  },
  half2: {
    alignItems: 'center',
    flex: 0.55,
    backgroundColor: 'white',
    borderBottomRightRadius: hp('5%'),
    borderBottomLeftRadius: hp('5%'),
  },
  imageStyle: {
    height: hp('12%'),
    width: wp('24%'),
    borderRadius: hp('10%'),
  },
  dashedCircle: {
    marginTop: hp('2.7%'),
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('15%'),
    width: wp('30%'),
    borderWidth: hp('0.55%'),
    borderStyle: 'dashed',
    borderColor: 'rgba(0, 36, 86, 1)',
    borderRadius: hp('10%'),
  },
});
export default ProfilePage;
