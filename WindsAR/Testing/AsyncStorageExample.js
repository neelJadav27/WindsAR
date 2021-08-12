import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageExample = () => {
  useEffect(() => {
    getData();
  }, []);
  const arrayofData = [{key: 1, value: 'smit patel'}];
  const getData = async () => {
    try {
      //alert('done');
      //await AsyncStorage.setItem('data', JSON.stringify(arrayofData));
      // const keys = await AsyncStorage.getAllKeys();
      // if (keys[0] == null) {
      //   alert(null);
      // }
      //const value3 = await AsyncStorage.getItem(keys[0]);
      //alert(value3.key.value);
      // await AsyncStorage.clear();
      //await AsyncStorage.removeItem('data');
      //const value = await AsyncStorage.getItem('data');
      // const value2 = JSON.parse(value);
      //alert(value2[0].value);
      //   if (value != null) {
      //     setData(value);
      //   }
    } catch (error) {
      console.log(error);
    }
  };
  const [data, setData] = useState('s');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>Data is : {data}</Text>
    </View>
  );
};

export default AsyncStorageExample;

const styles = StyleSheet.create({});
