import React from 'react';
import {Marker} from 'react-native-maps';
import {tintColor} from '../constants/colors';

const SzopMarker = ({point}) => {
  return (
    <Marker
      title={point.street}
      description={point.description}
      coordinate={{
        latitude: point.latitude,
        longitude: point.longitude,
      }}
      pinColor={tintColor}
    />
  );
};

export default SzopMarker;
