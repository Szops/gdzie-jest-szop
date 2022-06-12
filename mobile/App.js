/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import MainTabNavigator from './src/navigation/MainTabNavigator';
import {tintColor, navDarkColor} from './src/constants/colors';
import MarkerContextProvider from './src/context/MarkerContextProvider';
import NotificationContextProvider from './src/context/NotificationContextProvider';
import LanguageContextProvider from './src/context/LanguageContextProvider';
import {useEffect} from 'react';
import {PermissionsAndroid, Alert} from 'react-native';
import LoadingScreen from './src/screens/LoadingScreen';
import NotificationManager from './src/utils/NotificationManager';
import DatabaseSyncManager from './src/utils/DatabaseSyncManager';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.DENIED) {
          Alert.alert(
            'Uwaga',
            'Brak dostępu do lokalizacji. Twoja pozycja nie będzie wyświetlana na mapie.',
          );
        }
      } catch (err) {
        console.warn(err);
      }
    };
    requestLocationPermission();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: navDarkColor}}>
      <StatusBar
        barStyle={'light-content'}
        hidden={false}
        animated={true}
        translucent={false}
        backgroundColor={tintColor}
      />
      <LanguageContextProvider>
        <DatabaseSyncManager setIsLoading={setIsLoading} />
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
          <NotificationContextProvider>
            <NotificationManager />
            <MarkerContextProvider>
              <MainTabNavigator />
            </MarkerContextProvider>
          </NotificationContextProvider>
          </>
        )}
      </LanguageContextProvider>
    </SafeAreaView>
  );
}
