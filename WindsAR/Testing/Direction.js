import React, {useState, useEffect} from 'react';
import CompassHeading from 'react-native-compass-heading';
import {Text, View} from 'react-native';

const Direction = () => {
  const [heading, setHeading] = useState(0);

  useEffect(() => {
    const degree_update_rate = 3;

    // accuracy on android will be hardcoded to 1
    // since the value is not available.
    // For iOS, it is in degrees
    CompassHeading.start(degree_update_rate, ({heading, accuracy}) => {
      setHeading(heading);
    });

    return () => {
      CompassHeading.stop();
    };
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          fontSize: 22,
          color: 'red',
        }}>
        {heading}: Direction
      </Text>
    </View>
  );
};

export default Direction;
