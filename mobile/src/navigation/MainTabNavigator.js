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
import MarkerContextProvider, {
  MarkerContext,
} from '../context/MarkerContextProvider';
import MapScreen, {mapScreenName} from '../screens/MapScreen';
import {LanguageContext} from '../context/LanguageContextProvider';

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
          name={NewsScreenName}
          component={NewsScreen}
          options={{
            title: text.pointsList,
            tabBarIcon: ({color}) => (
              <Icon name="web" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
