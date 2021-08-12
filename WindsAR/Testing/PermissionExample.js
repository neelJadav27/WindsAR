import React from 'react';
import {
  Button,
  PermissionsAndroid,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      alert('You can use the camera');
    } else {
      alert('camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

const PermissionExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>Try permissions</Text>
      <Button title="request permissions" onPress={requestCameraPermission} />
    </View>
  );
};

export default PermissionExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'white',
    padding: 8,
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
