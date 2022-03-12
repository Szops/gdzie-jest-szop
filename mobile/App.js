/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import MainTabNavigator from './src/navigation/MainTabNavigator';
import HelloSzopScreen from './src/screens/HelloSzopScreen';
import ReactNativeHelloScreen from './src/screens/ReactNativeHelloScreen';
import {tintColor} from './src/constants/colors';
import PointsContextProvider from './src/context/PointsContextProvider';

import LanguageContextProvider, {
  LanguageContext,
} from './src/context/LanguageContextProvider';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={'light-content'}
        hidden={false}
        animated={true}
        translucent={false}
        backgroundColor={tintColor}
      />
      <LanguageContextProvider>
        <PointsContextProvider>
            <MainTabNavigator />
        </PointsContextProvider>
      </LanguageContextProvider>
    </SafeAreaView>
  );
}
