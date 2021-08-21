import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../utils/Colors';

const ArrayTest = () => {
  const [data, setData] = useState([
    {
      id: 0,
      name: 'smit',
      king: 'king0',
    },
    {
      id: 1,
      name: 'patel',
      king: 'king1',
    },
  ]);

  useEffect(() => {
    // setData([...data, (data[1] = {id: 2, name: 'patel', king: 'king3'})]);
    //data[]
    data[0] = {...data[0], king: 'king2', king2: 'king22'};
    setData([...data]);
    // console.log(data[0].name);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.APP_BLUE,
      }}>
      {data.map(value => (
        <View key={value.id}>
          <Text style={{fontSize: 20}}>
            {value.id} {value.name} {value.king} {value.king2}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default ArrayTest;

const styles = StyleSheet.create({});
