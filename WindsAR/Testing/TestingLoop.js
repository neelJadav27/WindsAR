import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

intialArr = ['smit', 'patel'];

const TestingLoop = () => {
  let i = 0;
  return (
    <View>
      <Text>{intialArr[i++]}</Text>
    </View>
  );
};

export default TestingLoop;

const styles = StyleSheet.create({});
