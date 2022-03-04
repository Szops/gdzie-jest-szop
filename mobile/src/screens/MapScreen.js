import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import {LanguageContext} from '../context/LanguageContextProvider';

export const mapScreenName = 'MapScreen';

const MapScreen = () => {
  const [shouldLoadMap, setShouldLoadMap] = useState(false);

  const {text} = useContext(LanguageContext);

  return shouldLoadMap ? (
    <View>
      <Text>MapScreen</Text>
    </View>
  ) : (
    <TouchableOpacity onPress={() => setShouldLoadMap(true)}>
      <View
        style={{
          backgroundColor: 'green',
          margin: 8,
          padding: 4,
          borderRadius: 5,
          elevation: 4,
        }}>
        <Text style={{color: 'white'}}>{text.loadTheMap}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MapScreen;
