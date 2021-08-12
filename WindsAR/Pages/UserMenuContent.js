import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {
  updateUserData,
  updateUserHistory,
  updateVoucherData,
  updateUserDataIsLoading,
} from '../redux/user/action';
import Colors from '../utils/Colors';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const UserMenuContent = ({navigation}) => {
  const {userData} = useSelector(state => state.user);
  const {pagesStatus} = useSelector(state => state.user);
  const {imageData} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const {userVoucherData} = useSelector(state => state.user);
  useEffect(() => {
    getAllData();
  }, []);
  const getAllData = async () => {
    const user_id = await AsyncStorage.getItem('user_id');
    getUserData(user_id);
    getUserHistory();
    getVouchersData();
  };
  const getUserData = async user_id => {
    let response = await fetch(
      'https://windsar.herokuapp.com/registerCustomer/customerProfile/',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: user_id,
        }),
      },
    );
    let recieveResponse = await response.json();
    dispatch(
      updateUserData({
        name: recieveResponse.name,
        age: recieveResponse.age,
        winCoins: recieveResponse.winCoins,
        placeVisited: recieveResponse.placeVisited,
        email: recieveResponse.email,
        vouchers: recieveResponse.vouchers,
      }),
    );
    dispatch(
      updateUserDataIsLoading({
        profileIsLoading: false,
      }),
    );
  };
  const getUserHistory = () => {
    // dispatch(
    //   updateUserHistory([
    //     {
    //       id: 1,
    //       name: 'Niagara Falls',
    //       time: '2.57 PM',
    //       address: 'NXk street, Ontario',
    //       visitedWhen: '2021-08-02',
    //     },
    //     {
    //       id: 2,
    //       name: 'Ambassador Bridge',
    //       time: '5:27 pm',
    //       address: 'ABC Street, Windsor',
    //       visitedWhen: '2021-08-03',
    //     },
    //     {
    //       id: 3,
    //       name: 'Jackson Park',
    //       time: '6:57 pm',
    //       address: 'Hamilton street, Ontario',
    //       visitedWhen: '2021-08-05',
    //     },
    //     {
    //       id: 4,
    //       name: 'Windsor Riverfront',
    //       time: '1:17 pm',
    //       address: 'Windsor Street, Ontario',
    //       visitedWhen: '2021-07-18',
    //     },
    //     {
    //       id: 5,
    //       name: 'Willistead Manor',
    //       time: '3:02 pm',
    //       address: 'Jack Street, Ontario',
    //       visitedWhen: '2021-07-26',
    //     },
    //   ]),
    // );
  };
  const getVouchersData = async () => {
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
    temp.forEach(element => {
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
    });

    dispatch(updateVoucherData(xyz));
    // if (userVoucherData.length == 0) {
    //   console.log('null');
    // } else {
    //   userVoucherData.map(value => console.log(value));
    // }
    // [recievedReponse].map(value => {
    //   value.map(value => console.log(value));
    // });
    // console.log(temp);

    // let temp = recievedReponse;
    // //str.split(' ').join('+');
    // temp = temp.split('"').join('');
    // // temp = temp.replace('":', ':');
    // //let temp2 = JSON.parse(temp);
    // temp.map(value => console.log(value));
    // temp2.map(value => {
    //   console.log(value);
    // });
    //dispatch(updateVoucherData([...xyz]));
    // dispatch(
    //   updateVoucherData([
    //     {
    //       id: 1,
    //       image:
    //         'https://api.pizzahut.io/v1/content/en-ca/ca-1/images/pizza/pizza.super-supreme.21f3260bdd33813f550cd523fbd8d073.1.jpg',
    //       subText: 'Expires in 2 days',
    //       discount: '40% off on Pizza by Pitza',
    //       winCoins: 700,
    //     },
    //     {
    //       id: 2,
    //       image:
    //         'https://insanelygoodrecipes.com/wp-content/uploads/2020/08/Birthday-Dessert-Ideas-Red-Velvet-Cake.png',
    //       subText: 'Expires in 7 days',
    //       discount: "15% off on Cakes by D'Cake",
    //       winCoins: 400,
    //     },
    //     {
    //       id: 3,
    //       image:
    //         'https://hips.hearstapps.com/delish/assets/17/36/1504715566-delish-fettuccine-alfredo.jpg',
    //       subText: 'Expires in 6 days',
    //       discount: '20% off on Italisn by Oaks',
    //       winCoins: 300,
    //     },
    //     {
    //       id: 4,
    //       image:
    //         'https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/16:9/w_4992,h_2808,c_limit/basically-burger-1.jpg',
    //       subText: 'Expires in 4 days',
    //       discount: '20% off on Burgers by KFC',
    //       winCoins: 100,
    //     },
    //     {
    //       id: 5,
    //       image:
    //         'https://www.tasteofhome.com/wp-content/uploads/2019/05/ice-cream-sundae-shutterstock_401521909.jpg',
    //       subText: 'Expires in 3 days',
    //       discount: "8% off on Icecream by D'Ice",
    //       winCoins: 500,
    //     },
    //     {
    //       id: 6,
    //       image:
    //         'https://media.blogto.com/articles/20210122-hong-shing.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70',
    //       subText: 'Expires in 20 days',
    //       discount: "5% off on Chinese by Tao's",
    //       winCoins: 100,
    //     },
    //   ]),
    // );
  };
  const logoutUser = async () => {
    await AsyncStorage.clear().then(navigation.navigate('Navigator'));
  };
  return (
    <>
      {pagesStatus.profileIsLoading ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Fetching data</Text>
        </View>
      ) : (
        <>
          <View style={styles.half1}>
            <View style={styles.imagePointBoxStyle}>
              <TouchableOpacity onPress={() => getImage()}>
                {imageData == null ? (
                  <Image
                    style={styles.imageStyle}
                    source={require('../Images/black.jpg')}></Image>
                ) : (
                  <Image
                    style={styles.imageStyle}
                    source={{uri: imageData}}></Image>
                )}
              </TouchableOpacity>
              <View style={styles.textWinCoinsGroup}>
                <Text style={styles.textWinCoins}>{userData.winCoins}</Text>
                <Text style={styles.textWinCoins2}>WINCOINS</Text>
              </View>
            </View>
            <Text style={styles.text2}>Hi, {userData.name}</Text>
          </View>

          <View style={styles.half2}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProfilePage')}>
              <Text style={styles.text}>Profile</Text>
            </TouchableOpacity>
            <View style={styles.line}></View>
            <TouchableOpacity
              onPress={() => navigation.navigate('UserVouchers')}>
              <Text style={styles.text}>Voucher</Text>
            </TouchableOpacity>

            <View style={styles.line}></View>
            <TouchableOpacity
              onPress={() => navigation.navigate('UserLocationHistory')}>
              <Text style={styles.text}>My History</Text>
            </TouchableOpacity>
            <View style={styles.line}></View>
            <TouchableOpacity onPress={() => navigation.navigate('UserHelp')}>
              <Text style={styles.text}>Get Help</Text>
            </TouchableOpacity>
            <View style={styles.line}></View>
            <TouchableOpacity onPress={logoutUser}>
              <Text style={styles.text}>Log out</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  half1: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.25,
    backgroundColor: 'gold',
    borderBottomRightRadius: hp('5%'),
    borderBottomLeftRadius: hp('5%'),
  },
  half2: {
    flex: 0.75,
    marginTop: hp('7%'),
    alignItems: 'center',
  },
  text: {
    fontSize: hp('2.7%'),
    color: Colors.APP_BLUE,
  },
  text2: {
    fontSize: hp('2.3%'),
    color: 'black',
  },
  textWinCoinsGroup: {
    paddingLeft: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWinCoins: {
    fontSize: hp('2.7%'),
    color: 'gold',
    fontWeight: 'bold',
  },
  textWinCoins2: {
    fontSize: hp('1.5%'),
    color: 'white',
    fontWeight: 'bold',
  },

  line: {
    marginTop: hp('2.6%'),
    marginBottom: hp('2.6%'),
    height: hp('0.25%'),
    width: wp('60%'),
    backgroundColor: Colors.APP_BLUE,
  },
  imagePointBoxStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    height: hp('10%'),
    width: wp('50%'),
    borderRadius: hp('10%'),
    backgroundColor: Colors.APP_BLUE,
  },
  imageStyle: {
    height: hp('10%'),
    width: wp('20%'),
    borderRadius: hp('10%'),
  },
});
export default UserMenuContent;
