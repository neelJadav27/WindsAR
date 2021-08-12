import {getDistance} from 'geolib';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FindDistance = () => {
  return (
    <View>
      <Text>
        {getDistance(
          {latitude: 51.5103, longitude: 7.49347},
          {latitude: 51.5105, longitude: 7.49458},
        )}
      </Text>
    </View>
  );
};
getDistance;
export default FindDistance;

const styles = StyleSheet.create({});
