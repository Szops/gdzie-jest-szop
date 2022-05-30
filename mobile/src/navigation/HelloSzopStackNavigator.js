import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HelloSzopScreen, {helloSzopScreenName} from '../screens/HelloSzopScreen';
import SettingsScreen, {SettingsScreenName} from '../screens/SettingsScreen';
import AboutScreen, {AboutScreenName} from '../screens/AboutScreen';
import NewsScreen, {NewsScreenName} from '../screens/NewsScreen';

export const helloSzopStackNavigatorName = 'HelloSzopStackNavigator';

const Stack = createNativeStackNavigator();
const HelloSzopStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={helloSzopScreenName} component={HelloSzopScreen} />
      <Stack.Screen name={SettingsScreenName} component={SettingsScreen} />
      <Stack.Screen name={AboutScreenName} component={AboutScreen} />
      <Stack.Screen name={NewsScreenName} component={NewsScreen} />
    </Stack.Navigator>
  );
};

export default HelloSzopStackNavigator;
