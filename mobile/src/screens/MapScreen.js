import {Button} from 'react-native';
import React, {useContext, useState} from 'react';
import {LanguageContext} from '../context/LanguageContextProvider';
import {PointsContext} from '../context/PointsContextProvider';
import Map from '../components/Map';
import {ScreenWrapper} from '../components/Wrapper';

export const mapScreenName = 'MapScreen';

const MapScreen = () => {
  const [shouldLoadMap, setShouldLoadMap] = useState(false);

  const {text} = useContext(LanguageContext);
  const {points} = useContext(PointsContext);

  const initialRegion = {
    latitude: 51.11108,
    longitude: 17.033686,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <ScreenWrapper>
      {shouldLoadMap ? (
        <Map points={points} initialRegion={initialRegion} />
      ) : (
        <Button
          title={text.loadTheMap}
          onPress={() => {
            setShouldLoadMap(true);
          }}
        />
      )}
    </ScreenWrapper>
  );
};

export default MapScreen;
