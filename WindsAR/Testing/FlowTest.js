import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
const FlowTest = () => {
  useEffect(() => {
    findCoordinates();
  }, []);
  const [data, setData] = useState({lat: 0, long: 0});
  function findCoordinates() {
    Geolocation.getCurrentPosition(
      position => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        setData(lat, long);
        printData(lat, long);
      },
      error => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 100000, maximumAge: 100000},
    );
    //  printData(data.lat, data.long);
  }
  function printData(lat, long) {
    console.log(lat + '   ' + long);
  }
  return (
    <View>
      <Text>{data.lat}</Text>
      <Text>{data.long}</Text>
    </View>
  );
};

export default FlowTest;

const styles = StyleSheet.create({});
