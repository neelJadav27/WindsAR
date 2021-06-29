import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LoginComponent from '../SubPages/LoginComponent';
import BackArrow from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
const TESTT = () => {
  return (
    <View style={styles.custom}>
      <Text style={styles.text}>Smit</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  custom: {
    top: 100,
    height: 320,
    width: 320,
    bottom: 20,
    justifyContent: 'flex-end',
    backgroundColor: 'red',
  },
  text: {
    fontSize: 20,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
});

export default TESTT;
