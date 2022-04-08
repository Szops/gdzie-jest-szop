import React, {useContext} from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components';
import {MarkerContext} from '../context/MarkerContextProvider';
import SzopMarker from './SzopMarker';
import {customStyle} from '../constants/mapStyle';

const StyledMapView = styled(MapView)`
  width: 100%;
  height: 100%;
`;

const Map = ({points, initialRegion}) => {
  const {displayMarker} = useContext(MarkerContext);

  const renderMarkers = () =>
    points.map(point => <SzopMarker point={point} key={point.pointId} />);

  return (
    <StyledMapView
      onPress={() => displayMarker('false')}
      initialRegion={initialRegion}
      showsUserLocation={true}
      customMapStyle={customStyle}
      followsUserLocation={true}
      showsMyLocationButton={true}>
      {points && renderMarkers()}
    </StyledMapView>
  );
};

export default Map;
