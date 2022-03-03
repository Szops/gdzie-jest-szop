import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {tintColor} from '../constants/colors';

import HelloSzopScreen from '../screens/HelloSzopScreen';
import ReactNativeHelloScreen from '../screens/ReactNativeHelloScreen';
import PointsListScreen from '../screens/PointsListScreen';

export default function MainTabNavigator(props) {
  const Tab = createBottomTabNavigator();

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
            title: 'GdzieJestSZOP',
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="PointsListScreen"
          component={PointsListScreen}
          options={{
            title: 'Lista punktów',
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
