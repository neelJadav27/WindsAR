import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
const MapExample = () => {
  useEffect(() => {
    findCoordinates();
  }, [deviceLatLong]);

  const [deviceLatLong, setDeviceLatLong] = useState({
    deviceLat: 0,
    deviceLong: 0,
  });
  const [locationInfo, setLocationInfo] = useState({
    locationName: 'Best',
    locationDescription: 'not bad',
    locationAddress: 'coooooooooooooooooool',
    showInfo: false,
  });
  const [markerInfo, setMarkerInfo] = useState([
    {
      Lat: 37.78825,
      Long: -122.4524,
      name: "Oak's",
      description: 'Nice place',
      address: 'London,UK',
    },
    {
      Lat: 37.76825,
      Long: -122.4324,
      name: 'Burger',
      description: 'all burgers',
      address: 'Windsor,Canada',
    },
  ]);
  function setData(key) {
    setLocationInfo({
      locationName: markerInfo[key].name,
      locationDescription: markerInfo[key].description,
      locationAddress: markerInfo[key].address,
      showInfo: true,
    });
  }
  function findCoordinates() {
    Geolocation.getCurrentPosition(
      position => {
        setDeviceLatLong({
          deviceLat: position.coords.latitude,
          deviceLong: position.coords.longitude,
        });
      },
      error => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 100, maximumAge: 100},
    );
  }
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.08,
          longitudeDelta: 0.02,
        }}>
        <Marker
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          pinColor="blue"
          key={5}
          title="Current location"
          onPress={() => setLocationInfo({showInfo: false})}></Marker>
        {markerInfo.map((values, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: values.Lat,
              longitude: values.Long,
              latitudeDelta: 0.08,
              longitudeDelta: 0.02,
            }}
            title={values.name}
            onPress={object => setData(object._targetInst.return.key)}></Marker>
        ))}
      </MapView>
      {locationInfo.showInfo && (
        <View
          style={{
            height: '20%',
            width: '80%',
            backgroundColor: 'white',
            position: 'absolute',
            alignSelf: 'center',
            bottom: 10,
          }}>
          <Text> {locationInfo.locationName} </Text>
          <Text> {locationInfo.locationDescription} </Text>
          <Text> {locationInfo.locationAddress} </Text>
          <Text> {deviceLatLong.deviceLat}</Text>
          <Text> {deviceLatLong.deviceLong}</Text>
        </View>
      )}
    </View>
  );
};

export default MapExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
