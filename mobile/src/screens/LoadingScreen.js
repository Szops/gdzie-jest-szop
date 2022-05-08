import {Text} from 'react-native';
import React, {useContext} from 'react';
import {LanguageContext} from '../context/LanguageContextProvider';
import {ScreenWrapper} from '../components/Wrapper';
import styled from 'styled-components';
import {tintColor} from '../constants/colors';
import {TileHeader} from '../components/Text';
import {prototype} from 'react-native/Libraries/Animated/Easing';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';

export const LoadingScreenName = 'LoadingScreen';

const LoadingScreenWrapper = styled(ScreenWrapper)`
  background-color: ${tintColor};
`;

const LoadingScreenText = styled(TileHeader)`
  text-transform: uppercase;
  text-shadow: 0 0 24px #00000044;
  letter-spacing: 2px;
  width: 100%;
  text-align: center;
`;

const LoadingScreenTextHuge = styled(LoadingScreenText)`
  font-size: 64px;
`;

const LoadingScreen = () => {
  const {text} = useContext(LanguageContext);

  return (
    <LoadingScreenWrapper>
      <LoadingScreenText>Gdzie jest</LoadingScreenText>
      <LoadingScreenTextHuge>SZOP?</LoadingScreenTextHuge>
    </LoadingScreenWrapper>
  );
};

export default LoadingScreen;
