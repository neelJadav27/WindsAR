import React, {useEffect} from 'react';
import {BackHandler, StyleSheet, ToastAndroid, Text, View} from 'react-native';

export default class DoublePressExitClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: 'yum',
      counter: 0,
    };
  }

  onBackPress() {
    if (this.state.counter == 0) {
      this.state.counter++;
      ToastAndroid.show('Press again to exit!', ToastAndroid.SHORT);
    } else {
      BackHandler.exitApp();
    }
    setTimeout(() => {
      this.state.counter = 0;
    }, 2000);
    return true;
  }
  componentDidMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.onBackPress.bind(this),
    );
  }
  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.onBackPress.bind(this),
    );
  }
  render() {
    return (
      <View>
        <Text> Hello </Text>
      </View>
    );
  }
}
