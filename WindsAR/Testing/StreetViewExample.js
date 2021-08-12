import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StreetView from 'react-native-streetview';
const StreetViewExample = () => {
  return (
    <View style={styles.container}>
      <StreetView
        style={styles.streetView}
        allGesturesEnabled={true}
        coordinate={{
          latitude: -33.852,
          longitude: 151.211,
        }}
        pov={{
          tilt: parseFloat(0),
          bearing: parseFloat(0),
          zoom: parseInt(1),
        }}
      />
    </View>
  );
};

export default StreetViewExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  streetView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
