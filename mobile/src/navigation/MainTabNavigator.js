import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {tintColor} from '../constants/colors';

import HelloSzopScreen, {helloSzopScreenName} from '../screens/HelloSzopScreen';
import ReactNativeHelloScreen from '../screens/ReactNativeHelloScreen';
import PointsListScreen, {
  PointsListScreenName,
} from '../screens/PointsListScreen';
import MapScreen, {mapScreenName} from '../screens/MapScreen';
import {LanguageContext} from '../context/LanguageContextProvider';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator(props) {
  const {text} = useContext(LanguageContext);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: tintColor,
          headerShown: false,
        }}
        tabBarHideOnKeyboard={true}>
        <Tab.Screen
          name={helloSzopScreenName}
          component={HelloSzopScreen}
          options={{
            title: text.appName,
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name={mapScreenName}
          component={MapScreen}
          options={{
            title: text.pointsMap,
            tabBarIcon: ({color}) => (
              <Icon name="map" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name={PointsListScreenName}
          component={PointsListScreen}
          options={{
            title: text.pointsList,
            tabBarIcon: ({color}) => (
              <Icon name="list" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="ReactNative"
          component={ReactNativeHelloScreen}
          options={{
            title: 'ReactNative',
            tabBarIcon: ({color}) => (
              <Icon name="info" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
