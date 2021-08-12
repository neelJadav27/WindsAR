import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Button} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

export default class DynamicImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../Images/landingbackground.png'),
        require('../Images/windsorlogo.png'),
        require('../Images/datelogo.jpg'),
      ],
    };
  }
  deleteImage(val) {
    this.setState({
      images: this.state.images.filter(function (img) {
        return img != val;
      }),
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          {this.state.images.map(val => (
            <View>
              <Image source={val} style={styles.imgSize}></Image>
              <TouchableOpacity onPress={() => this.deleteImage(val)}>
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  imgSize: {
    height: 300,
    width: 300,
  },
});
