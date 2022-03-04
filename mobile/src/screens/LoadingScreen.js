import {View, Text} from 'react-native';
import React from 'react';

const LoadingScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Wczytywanie...</Text>
    </View>
  );
};

export default LoadingScreen;
