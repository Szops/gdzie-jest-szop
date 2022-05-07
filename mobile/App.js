/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, StatusBar, ToastAndroid} from 'react-native';
import MainTabNavigator from './src/navigation/MainTabNavigator';
import {tintColor, navDarkColor} from './src/constants/colors';
import MarkerContextProvider from './src/context/MarkerContextProvider';
import LanguageContextProvider from './src/context/LanguageContextProvider';
import {useEffect} from 'react';
import {PermissionsAndroid, Alert} from 'react-native';
import LoadingScreen from './src/screens/LoadingScreen';
import {getVersion, getPoints} from './src/api/szopPoints';
import PointsDAO from './src/database/PointsDAO';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  const checkIsDataVersionSync = async () => {
    let v;
    return getVersion()
      .then(version => {
        v = version;
        return PointsDAO.getPointsLists().fetch();
      })
      .then(lists => {
        let test = false;
        if (lists.length === 0) test = true;
        else
          lists.map(list => {
            if (list.version !== v) test = true;
          });
        return {test, v};
      });
  };

  const addNewPoints = async version => {
    return PointsDAO.deleteAllLists()
      .then(() => {
        return getPoints();
      })
      .then(points => {
        return PointsDAO.createSzopPointsList({
          version: version,
          list: points,
        });
      });
  };

  const checkDataSync = async () => {
    setIsLoading(true);
    checkIsDataVersionSync()
      .then(({test, v}) => {
        if (test) {
          ToastAndroid.showWithGravity(
            'Pobieranie danych',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
          return addNewPoints(v);
        } else {
          ToastAndroid.showWithGravity(
            'Dane aktualne',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
        }
      })
      .catch(err => {
        ToastAndroid.showWithGravityAndOffset(
          err.message,
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
        );
        console.error(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    checkDataSync();
  }, []);

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
        <MarkerContextProvider>
          {isLoading ? <LoadingScreen /> : <MainTabNavigator />}
        </MarkerContextProvider>
      </LanguageContextProvider>
    </SafeAreaView>
  );
}
