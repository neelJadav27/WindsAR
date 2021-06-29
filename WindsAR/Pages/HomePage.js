import * as React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import BarsButton from 'react-native-vector-icons/FontAwesome';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HomePage = ({navigation}) => {
  return (
    <View>
      <ImageBackground
        source={require('../Images/landingbackground.png')}
        style={{
          height: hp('100%'),
          width: wp('100%'),
        }}>
        <BarsButton
          name="bars"
          size={wp('7%')}
          style={styles.BarsButtonStyle}
          onPress={() => navigation.openDrawer()}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  BarsButtonStyle: {
    color: 'black',
    paddingTop: hp('2%'),
    paddingLeft: hp('2%'),
  },
});

export default HomePage;
