import {Text} from 'react-native';
import React, {useContext} from 'react';
import {LanguageContext} from '../context/LanguageContextProvider';
import {ScreenWrapper} from '../components/Wrapper';

export const LoadingScreenName = 'LoadingScreen';

const LoadingScreen = () => {
  const {text} = useContext(LanguageContext);
  return (
    <ScreenWrapper>
      <Text>{text.loading}...</Text>
    </ScreenWrapper>
  );
};

export default LoadingScreen;
