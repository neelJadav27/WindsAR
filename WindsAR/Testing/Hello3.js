import React, {useState} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 320;

function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

const Hello3 = () => {
  return (
    <View style={styles.customMargin}>
      <Icon name="calendar" size={100} />
      <Text style={styles.text}> Smit </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  customMargin: {
    flex: 0.5,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
    paddingBottom: 30,
  },
  text: {
    fontSize: normalize(100),
  },
});

export default Hello3;
