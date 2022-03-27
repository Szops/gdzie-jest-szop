import React from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components';
import SzopMarker from './SzopMarker';

const StyledMapView = styled(MapView)`
  width: 100%;
  height: 100%;
`;

const Map = ({points, initialRegion}) => {
  const renderMarkers = () =>
    points.map(point => <SzopMarker point={point} key={point.point_id} />);

  return (
    <StyledMapView
      initialRegion={initialRegion}
      showsUserLocation={true}
      followsUserLocation={true}
      showsMyLocationButton={true}>
      {points && renderMarkers()}
    </StyledMapView>
  );
};

export default Map;
