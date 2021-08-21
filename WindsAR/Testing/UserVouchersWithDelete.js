import React, {useState} from 'react';
import DeleteIcon from 'react-native-vector-icons/AntDesign';
import edit from 'react-native-vector-icons/FontAwesome';
import deleteCircle from 'react-native-vector-icons/MaterialCommunityIcons';
import BackArrow from 'react-native-vector-icons/MaterialIcons';
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Image,
  Button,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Linking,
  ScrollView,
  ToastAndroid,
  Alert,
} from 'react-native';
import Colors from '../utils/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {color} from 'react-native-reanimated';
const image = {
  uri: 'https://api.pizzahut.io/v1/content/en-ca/ca-1/images/pizza/pizza.super-supreme.21f3260bdd33813f550cd523fbd8d073.1.jpg',
};
const image1 = {
  uri: 'https://insanelygoodrecipes.com/wp-content/uploads/2020/08/Birthday-Dessert-Ideas-Red-Velvet-Cake.png',
};
const image2 = {
  uri: 'https://hips.hearstapps.com/delish/assets/17/36/1504715566-delish-fettuccine-alfredo.jpg',
};

const image3 = {
  uri: 'https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/16:9/w_4992,h_2808,c_limit/basically-burger-1.jpg',
};

const image4 = {
  uri: 'https://www.tasteofhome.com/wp-content/uploads/2019/05/ice-cream-sundae-shutterstock_401521909.jpg',
};

const image5 = {
  uri: 'https://media.blogto.com/articles/20210122-hong-shing.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70',
};

export default class UserVouchersWithDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteChoice: false,
      data: [
        {
          id: 1,
          image:
            'https://api.pizzahut.io/v1/content/en-ca/ca-1/images/pizza/pizza.super-supreme.21f3260bdd33813f550cd523fbd8d073.1.jpg',
          subText: 'Expires in 2 days',
          discount: '40% off on Pizza by Pitza',
          winCoins: 700,
        },
        {
          id: 2,
          image:
            'https://insanelygoodrecipes.com/wp-content/uploads/2020/08/Birthday-Dessert-Ideas-Red-Velvet-Cake.png',
          subText: 'Expires in 7 days',
          discount: "15% off on Cakes by D'Cake",
          winCoins: 400,
        },
        {
          id: 3,
          image:
            'https://hips.hearstapps.com/delish/assets/17/36/1504715566-delish-fettuccine-alfredo.jpg',
          subText: 'Expires in 6 days',
          discount: '20% off on Italisn by Oaks',
          winCoins: 300,
        },
        {
          id: 4,
          image:
            'https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/16:9/w_4992,h_2808,c_limit/basically-burger-1.jpg',
          subText: 'Expires in 4 days',
          discount: '20% off on Burgers by KFC',
          winCoins: 100,
        },
        {
          id: 5,
          image:
            'https://www.tasteofhome.com/wp-content/uploads/2019/05/ice-cream-sundae-shutterstock_401521909.jpg',
          subText: 'Expires in 3 days',
          discount: "8% off on Icecream by D'Ice",
          winCoins: 500,
        },
        {
          id: 6,
          image:
            'https://media.blogto.com/articles/20210122-hong-shing.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70',
          subText: 'Expires in 20 days',
          discount: "5% off on Chinese by Tao's",
          winCoins: 100,
        },
      ],
    };
  }

  render() {
    const {data} = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButtonStyle}>
          <BackArrow
            name="arrow-back"
            Icon
            style={{color: '#FFF'}}
            size={wp('6%')}
            onPress={() => this.props.navigation.goBack()}></BackArrow>
        </TouchableOpacity>

        {/* Bottom Section */}
        <View style={styles.bottom}>
          <Text style={styles.text1}> Current Vouchers</Text>

          <ScrollView>
            <SafeAreaView>
              {data && data.length
                ? data.map(dataObj => (
                    <View key={dataObj.id}>
                      <TouchableOpacity
                        onPress={() =>
                          Alert.alert(
                            'Redeem Voucher',
                            'Are you confirm that do you want to redeem?',
                            [
                              {
                                text: 'Yes',
                                onPress: () => {
                                  this.setState({deleteChoice: true});
                                },
                              },

                              {
                                text: 'No',
                                onPress: () => {
                                  this.setState({deleteChoice: false});
                                },
                              },
                            ],
                          )
                        }>
                        <View style={styles.section}>
                          <ImageBackground
                            source={{uri: dataObj.image}}
                            style={styles.image}>
                            <Text style={styles.stext}>{dataObj.discount}</Text>
                            <View style={styles.subSection}>
                              <Text style={styles.innertext}>
                                {dataObj.subText}
                              </Text>
                            </View>
                            <Text style={styles.stext}>
                              WinCoins : {dataObj.winCoins}
                            </Text>
                          </ImageBackground>
                        </View>
                      </TouchableOpacity>
                    </View>
                  ))
                : null}
            </SafeAreaView>
          </ScrollView>
        </View>
      </View>
    );
  }
}

//Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.APP_BLUE,
  },

  heading1: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
    color: '#002456',
  },

  heading2: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: '#002456',
  },

  heading3: {
    fontSize: hp('2%'),
    fontWeight: '100',
    color: '#002456',
  },

  image: {
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
    resizeMode: 'contain',
    opacity: 0.8,
    backgroundColor: 'black',
    height: 100,
    alignItems: 'center',
  },

  top: {
    flex: 0.5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  centerImage: {
    width: 200,
    height: 200,
  },

  bottom: {
    flex: 1,
    backgroundColor: Colors.APP_BLUE,
    width: wp('100%'),
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  text1: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    color: '#FECE05',
    marginTop: wp('04%'),
    marginBottom: wp('08%'),
  },

  section: {
    flex: 0.3,
    width: wp('85%'),
    marginBottom: 20,
  },

  iconContainer: {
    height: 100,
    left: 150,
    bottom: 80,
    justifyContent: 'space-evenly',
  },

  iconStyle: {
    backgroundColor: 'gold',
    height: 40,
    width: 40,
    borderRadius: 100,
    justifyContent: 'center',
  },

  backButtonStyle: {
    alignSelf: 'flex-start',
    marginLeft: wp('3%'),
    marginTop: 10,
    color: '#fff',
  },

  buttonContainer: {
    width: wp('85%'),
    height: wp('12%'),
    marginTop: 30,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  buttonStyling: {
    width: wp('36%'),
    backgroundColor: '#fff',
    borderRadius: 30,
    overflow: 'hidden',
    justifyContent: 'center',
  },

  buttonStyling1: {
    width: wp('36%'),
    backgroundColor: '#B42D20',
    borderRadius: 30,
    overflow: 'hidden',
    justifyContent: 'center',
  },

  buttonText: {
    textAlign: 'center',
  },

  stext: {
    fontSize: hp('2.7%'),
    fontWeight: 'bold',
    color: '#fff',
    marginTop: hp('0.2%'),
    textAlign: 'center',
  },

  subSection: {
    width: wp('64%'),
    height: 40,
    backgroundColor: '#FECE05',
    borderRadius: 30,
    justifyContent: 'center',
  },

  innertext: {
    fontStyle: 'normal',
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    color: '#002456',
    textAlign: 'center',
  },
});
