import * as React from 'react';
import {
  Button,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
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
      <View style={styles.main}>
        <View style={styles.half1}>
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

        <View style={styles.half2}>
          <Text style={styles.historyText}> History </Text>
          <View style={styles.flexRow}>
            <View style={styles.detailsBox}>
              <Text style={styles.placeText}>Places</Text>
              <Text style={styles.placeValue}>35</Text>
            </View>
            <View style={styles.detailsBox}>
              <Text style={styles.placeText}>Vouchers</Text>
              <Text style={styles.placeValue}>7</Text>
            </View>
          </View>
          <View style={styles.flexRow}>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: hp('3%'),
    fontWeight: 'bold',
    fontSize: hp('2.3%'),
    color: 'rgba(0, 36, 86, 1)',
  },
  text2: {
    marginTop: hp('2.5%'),
    fontSize: hp('2.2%'),
    color: 'rgba(0, 36, 86, 1)',
  },
  text3: {
    fontSize: hp('1.8%'),
    color: 'rgba(0, 36, 86, 1)',
  },
  uwinCoins: {
    marginTop: hp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('8%'),
    width: wp('40%'),
    backgroundColor: 'rgba(0, 36, 86, 1)',
    borderRadius: hp('5%'),
  },
  historyText: {
    marginTop: hp('7%'),
    textAlign: 'center',
    fontSize: hp('2.3%'),
    color: 'gold',
  },
  uwinCoinsText1: {
    fontSize: hp('2.7%'),
    color: 'gold',
    fontWeight: 'bold',
  },
  uwinCoinsText2: {
    fontSize: hp('2%'),
    color: 'white',
  },
  main: {
    backgroundColor: 'rgba(0, 36, 86, 1)',
    flex: 1,
  },
  half1: {
    display: 'flex',
    alignItems: 'center',
    flex: 0.45,
    backgroundColor: 'white',
    borderBottomRightRadius: hp('5%'),
    borderBottomLeftRadius: hp('5%'),
  },
  half2: {
    flex: 0.55,
  },
  imageStyle: {
    height: hp('10%'),
    width: wp('20%'),
    borderRadius: hp('10%'),
  },
  dashedCircle: {
    marginTop: hp('2.3%'),
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('12%'),
    width: wp('24%'),
    borderWidth: hp('0.55%'),
    borderStyle: 'dashed',
    borderColor: 'rgba(0, 36, 86, 1)',
    borderRadius: hp('10%'),
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  detailsBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('3.5%'),
    height: hp('15%'),
    width: wp('30%'),
    borderRadius: hp('2%'),
    backgroundColor: 'white',
  },
  editButton: {
    marginTop: hp('10%'),
    backgroundColor: 'white',
    height: hp('7%'),
    width: wp('30%'),
    borderRadius: hp('4%'),
    justifyContent: 'center',
  },
  editText: {
    fontSize: hp('2.1%'),
    textAlign: 'center',
    color: 'rgba(0, 36, 86, 1)',
  },
  deleteButton: {
    marginTop: hp('10%'),
    backgroundColor: 'red',
    height: hp('7%'),
    width: wp('30%'),
    borderRadius: hp('4%'),
    justifyContent: 'center',
  },
  deleteText: {
    color: 'white',
    fontSize: hp('2.1%'),
    textAlign: 'center',
  },
  placeText: {
    fontSize: hp('2.1%'),
    textAlign: 'center',
    color: 'rgba(0, 36, 86, 1)',
  },
  placeValue: {
    fontSize: hp('3%'),
    textAlign: 'center',
    color: 'rgba(0, 36, 86, 1)',
    fontWeight: 'bold',
  },
});
export default ProfilePage;
