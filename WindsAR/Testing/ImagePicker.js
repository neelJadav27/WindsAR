import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import Resources from '../utils/Resources';

const ImagePicker = () => {
  const [image, setImage] = useState();
  async function getImage() {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log(JSON.stringify(res));
      setImage(res.uri);
      console.log(
        'uri is : ' + res.uri,
        res.type, // mime type
        res.name,
        res.size,
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  }
  return (
    <View style={{flex: 1}}>
      <Image
        style={{height: 200, width: 200}}
        resizeMode="contain"
        source={{uri: image}}></Image>
      <TouchableOpacity onPress={() => getImage()}>
        <Text>Click to get photo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({});
