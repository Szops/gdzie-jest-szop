import {Button} from 'react-native';
import React, {useContext, useState} from 'react';
import {LanguageContext} from '../context/LanguageContextProvider';
import Map from '../components/Map';
import {ScreenWrapper} from '../components/Wrapper';
import withObservables from '@nozbe/with-observables';
import PointsDAO from '../database/PointsDAO';

export const mapScreenName = 'MapScreen';

const MapScreen = ({points}) => {
  const [shouldLoadMap, setShouldLoadMap] = useState(false);

  const {text} = useContext(LanguageContext);

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

export default withObservables(['points'], ({points}) => ({
  points: PointsDAO.getPoints().observeWithColumns([
    'is_notifications_enabled',
  ]),
}))(MapScreen);
