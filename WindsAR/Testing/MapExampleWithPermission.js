import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  PermissionsAndroid,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Colors from '../utils/Colors';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CloseIcon from 'react-native-vector-icons/AntDesign';

const MapExampleWithPermission = () => {
  const [locationPermission, setLocationPermission] = useState('unknown');
  useEffect(() => {
    requestCameraPermission();
  }, [locationPermission]);
  const [deviceLatLong, setDeviceLatLong] = useState({
    deviceLat: 0,
    deviceLong: 0,
  });
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

  const [permissionMessage, setPermissionMessage] = useState(
    'Please allow location permission to see map',
  );
  const [showButton, setShowButton] = useState(true);
  const [markerKey, setMarkerKey] = useState(0);
  const [showMarker, setShowMarker] = useState(false);
  const [markerInfo, setMarkerInfo] = useState([
    {
      Lat: 37.78825,
      Long: -122.4524,
      name: 'Windsor Art Gallary',
      description:
        'The Art Gallery of Windsor is a non-for-profit art institute in Windsor, Ontario, Canada. Established in 1943, the gallery has a mandate as a public art space to show significant works of art by local, regional, and national artists.',
      address: '401 Riverside, Windsor,Canada',
      winCoins: 450,
      canCollect: true,
    },
    {
      Lat: 37.76825,
      Long: -122.4324,
      name: 'Ambassador bridge',
      description:
        'The Ambassador Bridge is a tolled, international suspension bridge across the Detroit River that connects Detroit, Michigan, United States, with Windsor, Ontario, Canada.',
      address: 'Windsor,Windsor near water front',
      winCoins: 300,
      canCollect: true,
    },
  ]);
  function setData(key) {
    setMarkerKey(key);
    setShowMarker(true);
  }
  function coinsCollected() {
    markerInfo[markerKey].canCollect = false;
    setShowMarker(false);
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
      {enableHighAccuracy: true, timeout: 100000, maximumAge: 100000},
    );
  }
  return (
    <>
      <View style={{flex: 1}}>
        {locationPermission == 'granted' ? (
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
                onPress={() => setShowMarker(false)}></Marker>
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
                  onPress={object => setData(object._targetInst.return.key)}
                  // onPress={object =>
                  //   setData(object._targetInst.return.key)
                  // }
                ></Marker>
              ))}
            </MapView>
            {showMarker && (
              <>
                <View style={styles.mainBox}>
                  <View style={styles.closeIcon}>
                    <TouchableOpacity onPress={() => setShowMarker(false)}>
                      <CloseIcon
                        name="close"
                        color="white"
                        size={30}></CloseIcon>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.displayInfoBox}>
                    <Text style={styles.boxHeading}>
                      {markerInfo[markerKey].name}
                    </Text>
                    <Text style={styles.boxAdress}>
                      {markerInfo[markerKey].address}
                    </Text>

                    <Text style={styles.boxDescription}>
                      {markerInfo[markerKey].description}
                    </Text>
                    <Text style={styles.boxCoinsText}>Collectable coins</Text>
                    <Text style={styles.boxWincoins}>
                      {markerInfo[markerKey].winCoins}
                    </Text>
                  </View>
                  {markerInfo[markerKey].canCollect ? (
                    <View style={styles.boxCollectButton}>
                      <TouchableOpacity onPress={() => coinsCollected()}>
                        <Text style={styles.boxCollectCoinsText}>
                          Collect coins
                        </Text>
                      </TouchableOpacity>
                    </View>
                  ) : null}
                </View>
              </>
            )}
          </View>
        ) : (
          <View style={styles.permissionError}>
            <Text style={{textAlign: 'center'}}>{permissionMessage}</Text>
          </View>
        )}
      </View>
    </>
  );
};

export default MapExampleWithPermission;

const styles = StyleSheet.create({
  boxCollectButton: {
    marginBottom: hp('4%'),
    marginTop: 'auto',
    borderRadius: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'gold',
    height: hp('5%'),
    width: wp('40%'),
  },
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  boxHeading: {
    fontSize: hp('3%'),
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  boxAdress: {
    paddingTop: hp('0.4%'),
    fontSize: hp('2.3%'),
    color: 'rgba(255, 255, 255, 1)',
  },
  boxCoinsText: {
    fontSize: hp('2.3%'),
    color: 'rgba(255, 255, 255, 1)',
    paddingTop: hp('10%'),
  },
  boxWincoins: {
    fontSize: hp('2.8%'),
    fontWeight: 'bold',
    color: 'gold',
  },
  boxCollectCoinsText: {
    fontSize: hp('2.8%'),
    fontWeight: 'bold',
    color: Colors.APP_BLUE,
  },
  boxDescription: {
    paddingTop: hp('1%'),
    paddingLeft: wp('9%'),
    paddingRight: wp('9%'),
    textAlign: 'justify',
    fontSize: hp('2.2'),
    color: 'rgba(255, 255, 255, 1)',
  },
  permissionError: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayInfoBox: {
    paddingTop: hp('7%'),
    position: 'absolute',
    alignItems: 'center',
  },
  mainBox: {
    margin: hp('4%'),
    borderRadius: hp('6%'),
    height: hp('85%'),
    width: wp('85%'),
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  closeIcon: {
    margin: hp('2%'),
    alignSelf: 'flex-end',
  },
});
