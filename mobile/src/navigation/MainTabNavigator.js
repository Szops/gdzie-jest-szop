import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {tintColor} from '../constants/colors';

import HelloSzopScreen from '../screens/HelloSzopScreen';
import ReactNativeHelloScreen from '../screens/ReactNativeHelloScreen';
import PointsListScreen from '../screens/PointsListScreen';
import MapScreen from '../screens/MapScreen';
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
          name="HelloSZOP"
          component={HelloSzopScreen}
          options={{
            title: text.appName,
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            title: 'Mapa punktów',
            tabBarIcon: ({color}) => (
              <Icon name="map" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="PointsListScreen"
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
