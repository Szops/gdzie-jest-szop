import {View, Text, Button} from 'react-native';
import React, {useContext, useState} from 'react';
import {LanguageContext} from '../context/LanguageContextProvider';
import {PointsContext} from '../context/PointsContextProvider';
import Map from '../components/Map';

export const mapScreenName = 'MapScreen';

const MapScreen = () => {
  const [shouldLoadMap, setShouldLoadMap] = useState(false);

  const {text} = useContext(LanguageContext);
  const {points} = useContext(PointsContext);

  return shouldLoadMap ? (
    <Map points={points} />
  ) : (
    <Button title={text.loadTheMap} onPress={() => setShouldLoadMap(true)} />
  );
};

export default MapScreen;
