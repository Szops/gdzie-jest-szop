import React from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components';
import SzopMarker from './SzopMarker';

const StyledMapView = styled(MapView)`
  flex: 1;
`;

const Map = ({points}) => {
  const initialRegion = {
    latitude: 51.11108,
    longitude: 17.033686,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const renderMarkers = () => points.map(point => <SzopMarker point={point} />);

  return (
    <StyledMapView initialRegion={initialRegion}>
      {renderMarkers()}
    </StyledMapView>
  );
};

export default Map;
