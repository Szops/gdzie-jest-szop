import React, {useContext, useEffect} from 'react';
import {BackHandler} from 'react-native';
import MapView from 'react-native-maps';
import styled from 'styled-components';
import {MarkerContext} from '../context/MarkerContextProvider';
import SzopMarker from './SzopMarker';
import {customStyle} from '../constants/mapStyle';
import {navDarkColor, darkTintColor} from '../constants/colors';

const StyledMapView = styled(MapView)`
  width: 100%;
  flex: 1;
`;

const Map = ({points, initialRegion}) => {
  const {displayMarker} = useContext(MarkerContext);
  const {navHidden} = useContext(MarkerContext);

  useEffect(() => {
    const backAction = () => {
      if (navHidden) {
        displayMarker(false);
      } else {
        BackHandler.exitApp();
      }
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [navHidden]);

  const renderMarkers = () =>
    points.map(point => <SzopMarker point={point} key={point.pointId} />);

  return (
    <StyledMapView
      onPress={() => displayMarker(false)}
      initialRegion={initialRegion}
      showsUserLocation={true}
      customMapStyle={customStyle}
      followsUserLocation={true}
      showsMyLocationButton={true}
      // loadingEnabled={true}
      // loadingBackgroundColor={navDarkColor}
      // loadingIndicatorColor={darkTintColor}
    >
      {points && renderMarkers()}
    </StyledMapView>
  );
};

export default Map;
