import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const MapScreen = () => {
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
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
        <Text style={{color: 'white'}}>Wczytaj mape</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MapScreen;
