import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';

const ScollCheck = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top} />

      <ScrollView style={{flexGrow: 0.5}}>
        <ImageBackground
          source={require('../Images/landingbackground.png')}
          style={styles.imgSize}></ImageBackground>
        <ImageBackground
          source={require('../Images/landingbackground.png')}
          style={styles.imgSize}></ImageBackground>
        <ImageBackground
          source={require('../Images/landingbackground.png')}
          style={styles.imgSize}></ImageBackground>
        <ImageBackground
          source={require('../Images/landingbackground.png')}
          style={styles.imgSize}></ImageBackground>
      </ScrollView>

      <View style={styles.middle} />
      <View style={styles.bottom} />
    </View>
  );
};

export default ScollCheck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
  },
  top: {
    flex: 0.3,
    backgroundColor: 'grey',
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  middle: {
    flex: 0.3,
    backgroundColor: 'beige',
    borderWidth: 5,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: 'pink',
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  imgSize: {
    height: 300,
    width: 300,
  },
});
