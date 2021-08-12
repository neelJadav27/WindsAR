import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Resources from '../utils/Resources';

const TestingGIFS = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'rgba(51,51,51,1)'}}>
      <Image source={Resources.JUMPING_BIRD}></Image>
    </View>
  );
};

export default TestingGIFS;

const styles = StyleSheet.create({});
