import React, {Component, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export default class Location extends Component {
  state = {
    location: '',
  };
  componentDidMount() {
    //Geolocation.requestAuthorization();
    this.findCoordinates();
  }
  findCoordinates = () => {
    Geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);
        alert(location);
        this.setState({location});
      },
      error => alert(error.message),
      {enableHighAccuracy: true, timeout: 10000, maximumAge: 10000},
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.findCoordinates}>
          <Text style={styles.welcome}>Find My Coords?</Text>
          <Text>Location: {this.state.location}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
