import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {LanguageContext} from '../context/LanguageContextProvider';

export const LoadingScreenName = 'LoadingScreen';

const LoadingScreen = () => {
  const {text} = useContext(LanguageContext);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{text.loading}...</Text>
    </View>
  );
};

export default LoadingScreen;
