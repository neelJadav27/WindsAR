import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  StatusBar,
  Text,
  PermissionsAndroid,
} from 'react-native';
import {getDistance} from 'geolib';
import Geolocation from 'react-native-geolocation-service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Resources from '../utils/Resources';
import {useDispatch, useSelector} from 'react-redux';
import {updateBusinessData} from '../redux/user/action';
import {setBusinessVoucherData, updateMarkerData} from '../redux/user/action';
const SplashScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {markerInfo} = useSelector(state => state.user);
  const [deviceLatLong, setDeviceLatLong] = useState(null);
  const [locationPermission, setlocationPermission] = useState(null);
  const [markerData, setMarkerData] = useState([]);
  useEffect(() => {
    checkIfLogged();
  }, []);

  const checkIfLogged = async () => {
    // await AsyncStorage.clear();
    const isLogged = await AsyncStorage.getItem('isLogged');
    if (isLogged != null && isLogged == 'true') {
      const userType = await AsyncStorage.getItem('userType');
      if (userType == 'customer') {
        const locationPermission = await requestLocationPermission();
        setlocationPermission(locationPermission);
        if (locationPermission == 'granted') {
          findCoordinates();
        } else {
          navigation.navigate('UserHomePage', {locationPermission});
        }
        // setTimeout(() => {
        //   navigation.navigate('UserHomePage', {
        //     locationPermission,
        //   });
        // }, 2000);
      } else if (userType == 'business') {
        //  const business_id = await AsyncStorage.getItem('business_id');
        const business_name = await AsyncStorage.getItem('business_name');
        const business_email = await AsyncStorage.getItem('business_email');
        dispatch(
          updateBusinessData({
            name: business_name,
            email: business_email,
          }),
        );

        getBusinessVoucherData();
      }
    } else {
      navigation.navigate('Welcome');
    }
  };
  async function getBusinessVoucherData() {
    let response = await fetch(
      'https://windsar.herokuapp.com/registerCustomer/fetchVoucher/',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      },
    );
    let recievedReponse = await response.json();
    let xyz = [];
    var temp = JSON.parse(recievedReponse);
    const business_name = await AsyncStorage.getItem('business_name');
    // console.log(business_name);
    temp.forEach(element => {
      console.log(element.businessName);
      if (element.businessName == business_name) {
        let discountPrice =
          ((element.actualPrice - element.discountPrice) * 100) /
          element.actualPrice;
        let discount =
          Math.floor(discountPrice) +
          '%' +
          ' off on ' +
          element.productName +
          ' by ' +
          element.businessName;
        let subText = 'Expires on ' + element.expiryDate;
        element.discount = discount;
        element.subText = subText;
        element.image =
          'https://media.blogto.com/articles/20210122-hong-shing.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70';
        xyz.push(element);
      }
    });

    dispatch(setBusinessVoucherData(xyz));
    // dispatch(
    //   setBusinessVoucherData([
    //     {
    //       id: 1,
    //       image:
    //         'https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/16:9/w_4992,h_2808,c_limit/basically-burger-1.jpg',
    //       discount: '10% off on Burgers by KFC',
    //       subText: 'Expires in 02 days',
    //       winCoins: 300,
    //     },
    //     {
    //       id: 2,
    //       image:
    //         'https://api.pizzahut.io/v1/content/en-ca/ca-1/images/pizza/pizza.super-supreme.21f3260bdd33813f550cd523fbd8d073.1.jpg',
    //       discount: '15% off on Pizza by D-Pizza',
    //       subText: 'Expires in 06 days',
    //       winCoins: 400,
    //     },
    //     {
    //       id: 3,
    //       image:
    //         'https://hips.hearstapps.com/delish/assets/17/36/1504715566-delish-fettuccine-alfredo.jpg',
    //       discount: '15% off on Pasta by Italiano',
    //       subText: 'Expires in 04 days',
    //       winCoins: 500,
    //     },
    //     {
    //       id: 4,
    //       image:
    //         'https://insanelygoodrecipes.com/wp-content/uploads/2020/08/Birthday-Dessert-Ideas-Red-Velvet-Cake.png',
    //       discount: '25% off on Cakes by D-Paul',
    //       subText: 'Expires in 07 days',
    //       winCoins: 700,
    //     },
    //     {
    //       id: 5,
    //       image:
    //         'https://media.blogto.com/articles/20210122-hong-shing.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70',
    //       discount: '20% off on Chinese by OAKS',
    //       subText: 'Expires in 21 days',
    //       winCoins: 200,
    //     },
    //     {
    //       id: 6,
    //       image:
    //         'https://www.tasteofhome.com/wp-content/uploads/2019/05/ice-cream-sundae-shutterstock_401521909.jpg',
    //       discount: '30% off on Ice-cream by IceVille',
    //       subText: 'Expires in 11 days',
    //       winCoins: 150,
    //     },
    //   ]),
    // );
    navigation.navigate('BussinessHomePage');
  }
  async function getMarkerInfo(lat, long) {
    let response = await fetch(
      'https://windsar.herokuapp.com/registerCustomer/fetchMarkerLocation/',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      },
    );
    let recievedReponse = await response.json();
    let tempMarker = [...recievedReponse];

    tempMarker.map(value => {
      value.canCollect = true;
      value.isInRange =
        getDistance(
          {latitude: lat, longitude: long},
          {latitude: value.Lat, longitude: value.Long},
        ) < 1000
          ? true
          : false;
    });
    dispatch(updateMarkerData([...tempMarker]));
    navigation.navigate('UserHomePage', {locationPermission: 'granted'});

    // let tempMarker = [];
    // let jsontemp = JSON.parse(recievedReponse);
    // jsontemp.forEach(element => {
    //   tempMarker.push(element);
    // });
    // tempMarker.map(
    //   value =>
    //     (value.isInRange =
    //       getDistance(
    //         {latitude: lat, longitude: long},
    //         {
    //           latitude: value.locationLatitude,
    //           longitude: value.locationLongitude,
    //         },
    //       ) < 1000
    //         ? true
    //         : false),
    // );
    // dispatch(updateMarkerData([...tempMarker]));
    // console.log('OK SO DATA IS' + markerInfo);
    // if (markerInfo.length != 0) {
    //   markerInfo.map(value => console.log(value));
    // }
    // navigation.navigate('UserHomePage', {locationPermission: 'granted'});

    //   let tempMarker = [
    //     {
    //       Lat: 37.4347983,
    //       Long: -122.094,
    //       name: 'Windsor Art Gallary',
    //       description:
    //         'The Art Gallery of Windsor is a non-for-profit art institute in Windsor, Ontario, Canada. Established in 1943, the gallery has a mandate as a public art space to show significant works of art by local, regional, and national artists.',
    //       address: '401 Riverside, Windsor,Canada',
    //       winCoins: 50,
    //       canCollect: true,
    //     },
    //     {
    //       Lat: 37.4227983,
    //       Long: -122.098,
    //       name: 'Ambassador bridge',
    //       description:
    //         'The Ambassador Bridge is a tolled, international suspension bridge across the Detroit River that connects Detroit, Michigan, United States, with Windsor, Ontario, Canada.',
    //       address: 'Windsor,Windsor near water front',
    //       winCoins: 100,
    //       canCollect: true,
    //     },
    //     {
    //       Lat: 37.4019983,
    //       Long: -122.084,
    //       name: 'Windsor Caesers Casino',
    //       description:
    //         'Caesars Windsor in Windsor, Ontario, Canada is one of four casinos in the Detroit–Windsor area and was opened in 1994 on the waterfront of the Detroit River. The casino overlooks the Detroit skyline from the waterfront, and is near the Canadian end of the Detroit-Windsor Tunnel',
    //       address: 'Windsor,Windsor near river front',
    //       winCoins: 200,
    //       canCollect: true,
    //     },
    //     {
    //       Lat: 37.4119983,
    //       Long: -122.074,
    //       name: 'Windsor Sculpture park',
    //       description:
    //         ' The Windsor Sculpture Park,is an open space in Windsor, that shows 35 large-scale contemporary sculptures by world-renowned artists.The park is located on the shore of the Detroit River, spanning from Assumption Park to Centennial Park, between the Ambassador Bridge and the Art Gallery of Windsor',
    //       address: 'Windsor, Windsor near river front',
    //       winCoins: 150,
    //       canCollect: true,
    //     },
    //   ];
    //  // tempMarker[0] = {...tempMarker[0], extraButton: 'true'};
    //   tempMarker.map(
    //     value =>
    //       (value.isInRange =
    //         getDistance(
    //           {latitude: lat, longitude: long},
    //           {latitude: value.Lat, longitude: value.Long},
    //         ) < 1000
    //           ? true
    //           : false),
    //   );
    //   dispatch(updateMarkerData([...tempMarker]));
    //   navigation.navigate('UserHomePage', {locationPermission: 'granted'});
  }
  function findCoordinates() {
    Geolocation.getCurrentPosition(
      position => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        getMarkerInfo(lat, long);
      },
      error => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 100000, maximumAge: 100000},
    );
  }
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      return granted;
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={{height: '16%', width: '75%'}}
          source={Resources.APP_LOGO2}></Image>
        <Image source={Resources.JUMPING_BIRD}></Image>
      </View>
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(51,51,51,1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
