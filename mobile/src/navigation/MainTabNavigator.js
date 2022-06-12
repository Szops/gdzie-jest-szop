import React, {useContext} from 'react';
import NewsScreen, {NewsScreenName} from '../screens/NewsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {tintColor, navDarkColor, temporaryNavColor} from '../constants/colors';
import HelloSzopScreen, {helloSzopScreenName} from '../screens/HelloSzopScreen';
import PointsListScreen, {
  PointsListScreenName,
} from '../screens/PointsListScreen';
import SettingsScreen, {SettingsScreenName} from '../screens/SettingsScreen';
import MarkerContextProvider, {
  MarkerContext,
} from '../context/MarkerContextProvider';
import MapScreen, {mapScreenName} from '../screens/MapScreen';
import {LanguageContext} from '../context/LanguageContextProvider';
import AboutScreen, {AboutScreenName} from '../screens/AboutScreen';
import HelloSzopStackNavigator, {
  helloSzopStackNavigatorName,
} from './HelloSzopStackNavigator';

const Tab = createBottomTabNavigator();
const darkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: navDarkColor,
  },
};

export default function MainTabNavigator() {
  const {text} = useContext(LanguageContext);
  const {navHidden} = useContext(MarkerContext);

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
            display: navHidden ? 'none' : 'flex',
            backgroundColor: temporaryNavColor,
            borderTopColor: temporaryNavColor,
            elevation: 3,
          },
          headerShown: false,
        }}>
        <Tab.Screen
          // name={helloSzopScreenName}
          // component={HelloSzopScreen}
          name={helloSzopStackNavigatorName}
          component={HelloSzopStackNavigator}
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
        {/* <Tab.Screen
          name={NewsScreenName}
          component={NewsScreen}
          options={{
            title: text.pointsList,
            tabBarIcon: ({color}) => (
              <Icon name="web" color={color} size={26} />
              ),
          }}
        />
        <Tab.Screen
          name={AboutScreenName}
          component={AboutScreen}
          options={{
            title: text.about,
            tabBarIcon: ({color}) => (
              <Icon name="info" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name={SettingsScreenName}
          component={SettingsScreen}
          options={{
            title: text.appName,
            tabBarIcon: ({color}) => (
              <Icon name="settings" color={color} size={26} />
            ),
          }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
