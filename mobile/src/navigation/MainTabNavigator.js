import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DarkTheme,
  NavigationContainer,
  DefaultTheme,
} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {textLightColor, tintColor} from '../constants/colors';
import {navDarkColor, temporaryNavColor} from '../constants/colors';
import HelloSzopScreen, {helloSzopScreenName} from '../screens/HelloSzopScreen';
import ReactNativeHelloScreen from '../screens/ReactNativeHelloScreen';
import PointsListScreen, {
  PointsListScreenName,
} from '../screens/PointsListScreen';
import MapScreen, {mapScreenName} from '../screens/MapScreen';
import {LanguageContext} from '../context/LanguageContextProvider';
import {NOT_INITIALIZED_ERROR} from '@react-navigation/core/lib/typescript/src/createNavigationContainerRef';

const Tab = createBottomTabNavigator();
const darkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: navDarkColor,
  },
};

export default function MainTabNavigator(props) {
  const {text} = useContext(LanguageContext);
  return (
    <NavigationContainer theme={darkTheme}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: tintColor,
          backgroundColor: navDarkColor,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: 90,
            backgroundColor: temporaryNavColor,
            borderTopColor: temporaryNavColor,
            elevation: 3,
          },
          headerShown: false,
        }}>
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
            title: 'XD',
            tabBarIcon: ({color}) => (
              <Icon name="list" color={color} size={26} />
            ),
          }}
        />
        {/*<Tab.Screen
          name="ReactNative"
          component={ReactNativeHelloScreen}
          options={{
            title: 'ReactNative',
            tabBarIcon: ({color}) => (
              <Icon name="info" color={color} size={26} />
            ),
          }}
        />*/}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
