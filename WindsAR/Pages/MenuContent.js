import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import HomePage from './HomePage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const MenuContent = props => {
  return (
    <>
      <View style={styles.half1}>
        <View style={styles.imagePointBoxStyle}>
          <Image
            style={styles.imageStyle}
            source={require('../Images/Smit2.jpg')}></Image>
          <View style={styles.textWinCoinsGroup}>
            <Text style={styles.textWinCoins}>9995</Text>
            <Text style={styles.textWinCoins2}>WINCOINS</Text>
          </View>
        </View>
        <Text style={styles.text2}>Hi, Smitkumar Patel</Text>
      </View>

      <View style={styles.half2}>
        <TouchableOpacity onPress={() => alert('Hi')}>
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <TouchableOpacity onPress={() => alert('Hi')}>
          <Text style={styles.text}>Voucher</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <TouchableOpacity onPress={() => alert('Hi')}>
          <Text style={styles.text}>Setting</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <TouchableOpacity onPress={() => alert('Hi')}>
          <Text style={styles.text}>My History</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <TouchableOpacity onPress={() => alert('Hi')}>
          <Text style={styles.text}>Get Help</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <TouchableOpacity onPress={() => alert('Hi')}>
          <Text style={styles.text}>Log out</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  half1: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.25,
    backgroundColor: 'gold',
    borderBottomRightRadius: hp('5%'),
    borderBottomLeftRadius: hp('5%'),
  },
  half2: {
    flex: 0.75,
    marginTop: hp('7%'),
    alignItems: 'center',
  },
  text: {
    fontSize: hp('2.7%'),
    color: 'rgba(0, 36, 86, 1)',
  },
  text2: {
    fontSize: hp('2.3%'),
    color: 'black',
  },
  textWinCoinsGroup: {
    paddingLeft: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWinCoins: {
    fontSize: hp('2.7%'),
    color: 'gold',
    fontWeight: 'bold',
  },
  textWinCoins2: {
    fontSize: hp('1.5%'),
    color: 'white',
    fontWeight: 'bold',
  },

  line: {
    marginTop: hp('2.6%'),
    marginBottom: hp('2.6%'),
    height: hp('0.25%'),
    width: wp('60%'),
    backgroundColor: 'rgba(0, 36, 86, 1)',
  },
  imagePointBoxStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    height: hp('10%'),
    width: wp('50%'),
    borderRadius: hp('10%'),
    backgroundColor: 'rgba(0, 36, 86, 1)',
  },
  imageStyle: {
    height: hp('10%'),
    width: wp('20%'),
    borderRadius: hp('10%'),
  },
});
export default MenuContent;
