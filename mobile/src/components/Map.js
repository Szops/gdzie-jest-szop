import {View, Text} from 'react-native';
import React from 'react';

import MapView from 'react-native-maps';

const Map = () => {
  return (
    <MapView
      style={{
        flex: 1,
      }}
      initialRegion={{
        latitude: 51.11108,
        longitude: 17.033686,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default Map;
