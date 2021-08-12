import React, {useEffect} from 'react';
import {BackHandler, StyleSheet, ToastAndroid, Text, View} from 'react-native';

const DoubleBackPress = () => {
  useEffect(() => {
    let counter = 0;
    const onBackPress = () => {
      if (counter == 0) {
        counter++;
        ToastAndroid.show('Press again to exit!', ToastAndroid.SHORT);
      } else {
        BackHandler.exitApp();
      }
      setTimeout(() => {
        counter = 0;
      }, 2000);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    };
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text>Hello smit</Text>
    </View>
  );
};

export default DoubleBackPress;

const styles = StyleSheet.create({});
