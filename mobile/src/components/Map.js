import {View, Text} from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import styled from 'styled-components';
import {tintColor} from '../constants/colors';

//#region styles
const StyledMapView = styled(MapView)`
  flex: 1;
`;

//#endregion

const Map = ({points}) => {
  const renderMarkers = () =>
    points.map(point => (
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
    ));

  return (
    <StyledMapView
      initialRegion={{
        latitude: 51.11108,
        longitude: 17.033686,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {renderMarkers()}
    </StyledMapView>
  );
};

export default Map;
