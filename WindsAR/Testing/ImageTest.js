import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import Resources from '../utils/Resources';

const ImageTest = () => {
  return (
    <View style={{flex: 1}}>
      <Image
        style={{height: 300, width: 300}}
        source={{
          uri: 'https://www.on-sitemag.com/wp-content/uploads/2020/07/ambassador_bridge_suspension.jpg',
        }}></Image>
    </View>
  );
};

export default ImageTest;

const styles = StyleSheet.create({});
