import React from 'react';
import {StyleSheet, Text, View, PermissionsAndroid} from 'react-native';
import {useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
const PermissionExample2 = () => {
  const [userLatLong, setUserLatLong] = useState({lat: 0, long: 0});
  const findCoordinates = () => {
    Geolocation.getCurrentPosition(
      position => {
        setUserLatLong({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      error => alert(error.message),
      {enableHighAccuracy: true, timeout: 10000, maximumAge: 10000},
    );
  };
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted == PermissionsAndroid.RESULTS.GRANTED) {
        findCoordinates();
      } else if (granted == PermissionsAndroid.RESULTS.DENIED) {
        setPermissionMessage(
          'Location permission denied.\nReload application and allow location permission',
        );
      } else if (granted == PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        setPermissionMessage(
          'Location permission set to never ask again.\nIf it was a mistake, follow below steps.\n1->Press and hold on windsor application\ni->Manually allow location permission\nOr\nii->Goto storange and cache and clear storage and cache',
        );
      }
      setLocationPermission(granted);
    } catch (err) {
      console.warn(err);
    }
  };
  const [locationPermission, setLocationPermission] = useState('unknown');
  const [permissionMessage, setPermissionMessage] = useState(
    'Please allow location permission to see map',
  );
  useEffect(() => {
    requestCameraPermission();
  }, [locationPermission]);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {locationPermission == 'granted' ? (
        <View>
          <Text>{userLatLong.lat}</Text>
          <Text>{userLatLong.long}</Text>
        </View>
      ) : (
        <View style={styles.permissionError}>
          <Text style={{textAlign: 'center'}}>{permissionMessage}</Text>
        </View>
      )}
    </View>
  );
};

export default PermissionExample2;

const styles = StyleSheet.create({
  permissionError: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
