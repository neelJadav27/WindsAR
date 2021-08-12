import React, {useState} from 'react';
import DeleteIcon from 'react-native-vector-icons/AntDesign';
import Edit from 'react-native-vector-icons/FontAwesome';
import DeleteCircle from 'react-native-vector-icons/MaterialCommunityIcons';
import BackArrow from 'react-native-vector-icons/MaterialIcons';
import Colors from '../utils/Colors';
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

export default class BussinessVouchers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteChoice: false,
    };
  }

  render() {
    return (
      <>
        <View style={{backgroundColor: 'white'}}>
          <BackArrow
            name="arrow-back"
            size={wp('8%')}
            style={styles.backButtonStyle}
            onPress={() => this.props.navigation.goBack()}></BackArrow>
        </View>
        <View style={styles.container}>
          {/* Top Section */}
          <View style={styles.top}>
            <Text style={styles.heading1}>Business Profile</Text>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Ski_trail_rating_symbol_black_circle.png',
              }}
              style={styles.centerImage}
            />
            <Text style={styles.heading2}>Business Name</Text>
            <Text style={styles.heading3}>businessmail@email.com</Text>
          </View>

          {/* Bottom Section */}
          <View style={styles.bottom}>
            <Text style={styles.text1}> Current Vouchers</Text>

            <ScrollView>
              <SafeAreaView>
                <View style={styles.section}>
                  <ImageBackground source={image} style={styles.image}>
                    <Text style={styles.stext}> 40% off on Pizza</Text>
                    <View style={styles.subSection}>
                      <Text style={styles.innertext}> Expires in 2 days</Text>
                    </View>
                  </ImageBackground>
                </View>

                <View style={styles.section}>
                  <ImageBackground source={image1} style={styles.image}>
                    <Text style={styles.stext}> 15% off on Cakes</Text>
                    <View style={styles.subSection}>
                      <Text style={styles.innertext}> Expires in 7 days</Text>
                    </View>
                    <View style={styles.iconContainer}></View>
                  </ImageBackground>
                </View>

                <View style={styles.section}>
                  <ImageBackground source={image2} style={styles.image}>
                    <Text style={styles.stext}> 20% off on Italian</Text>
                    <View style={styles.subSection}>
                      <Text style={styles.innertext}> Expires in 6 days</Text>
                    </View>
                  </ImageBackground>
                </View>

                <View style={styles.section}>
                  <ImageBackground source={image3} style={styles.image}>
                    <Text style={styles.stext}> 15% off on Burgers</Text>
                    <View style={styles.subSection}>
                      <Text style={styles.innertext}> Expires in 4 days</Text>
                    </View>
                  </ImageBackground>
                </View>

                <View style={styles.section}>
                  <ImageBackground source={image4} style={styles.image}>
                    <Text style={styles.stext}> 25% off on Icecream</Text>
                    <View style={styles.subSection}>
                      <Text style={styles.innertext}> Expires in 3 days</Text>
                    </View>
                  </ImageBackground>
                </View>

                <View style={styles.section}>
                  <ImageBackground source={image5} style={styles.image}>
                    <Text style={styles.stext}> 5% off on Chinese</Text>
                    <View style={styles.subSection}>
                      <Text style={styles.innertext}> Expires in 20 days</Text>
                    </View>
                  </ImageBackground>
                </View>
              </SafeAreaView>
            </ScrollView>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyling}
                onPress={() => Alert.alert('Simple Button pressed')}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonStyling1}
                onPress={() =>
                  Alert.alert(
                    'Edit Voucher',
                    'Are you sure you want to delete?',
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
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  }
}

//Styling
const styles = StyleSheet.create({
  backButtonStyle: {
    paddingLeft: wp('1%'),
    paddingTop: hp('1%'),
    backgroundColor: 'white',
    width: wp('9%'),
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    height: hp('13%'),
    alignItems: 'center',
  },

  top: {
    flex: 0.5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  centerImage: {
    height: hp('26%'),
    width: wp('52%'),
  },

  bottom: {
    flex: 0.7,
    backgroundColor: Colors.APP_BLUE,
    width: wp('100%'),
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  text1: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    color: '#FECE05',
    marginTop: wp('08%'),
    marginBottom: wp('05%'),
  },

  section: {
    flex: 0.3,
    width: wp('85%'),
    marginBottom: 20,
  },

  iconContainer: {
    height: 100,
    justifyContent: 'center',
    bottom: 80,
    left: 150,
  },

  iconStyle: {
    backgroundColor: 'red',
    height: 40,
    width: 40,
    borderRadius: 100,
  },

  backButtonStyle: {
    alignSelf: 'flex-start',
    marginLeft: wp('2%'),
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
    fontSize: hp('3.5%'),
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 6,
    width: 270,
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
