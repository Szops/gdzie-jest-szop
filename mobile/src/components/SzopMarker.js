import React from 'react';
import {Marker} from 'react-native-maps';
import {tintColor} from '../constants/colors';

const SzopMarker = ({point}) => {
  return (
    <Marker
      key={point.point_id}
      title={point.title}
      description={point.desc}
      coordinate={{
        latitude: Number.parseFloat(point.lat),
        longitude: Number.parseFloat(point.lng),
      }}
      pinColor={tintColor}
    />
  );
};

export default SzopMarker;
