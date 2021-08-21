import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function smallView() {
  return (
    <View style={styles.popUp}>
      <Text>Smit patel</Text>
    </View>
  );
}

const Layout = () => {
  return (
    <>
      <View style={styles.main}>
        <View style={styles.h1}></View>
        <View style={styles.h2}>
          {smallView()}
          <Text>Smit</Text>
        </View>
      </View>
    </>
  );
};

export default Layout;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'lime',
  },
  h1: {
    flex: 0.5,
    backgroundColor: 'red',
    borderRadius: 100,
  },
  h2: {
    flex: 0.5,
    backgroundColor: 'purple',
  },
  popUp: {
    zIndex: 1,
    position: 'absolute',
    marginLeft: 20,
    height: 200,
    width: 200,
    backgroundColor: 'yellow',
  },
});
