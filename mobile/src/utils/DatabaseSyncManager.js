import {View, Button, ToastAndroid, Alert} from 'react-native';
import React, {useEffect} from 'react';
import PointsDAO from '../database/PointsDAO';
import {getVersion, getPoints} from '../api/szopPoints';

const DatabaseSyncManager = ({setIsLoading}) => {
  const checkIsDataVersionSync = async () => {
    let v;
    return getVersion()
      .then(version => {
        v = version;
        return PointsDAO.getSzopPointsList().fetch();
      })
      .then(lists => {
        let sync = true;
        if (lists.length === 0) sync = false;
        else
          lists.map(list => {
            if (list.version !== v) sync = false;
          });
        return {sync, v};
      });
  };

  const addNewPoints = async version => {
    // get subscribed points
    let subscribedPoints = (await PointsDAO.getSzopPoints().fetch())
      .filter(point => point.isNotificationsEnabled)
      .map(point => ({id: point.pointId, street: point.street}));

    // remove old lists
    return (
      PointsDAO.deleteSzopLists()
        .then(() => {
          return getPoints();
        })
        // add new list
        .then(points => {
          points = points.map(p => ({...p, isNotificationsEnabled: false}));
          // check if points were subscribed
          subscribedPoints.forEach(subscribedPoint => {
            foundPoint = points.find(
              p =>
                p.pointId === subscribedPoint.id &&
                p.street === subscribedPoint.street,
            );
            if (foundPoint !== undefined) {
              foundPoint.isNotificationsEnabled = true;
              subscribedPoints = subscribedPoints.filter(
                p => p.id !== subscribedPoint.id,
              );
            }
          });
          // Alert if not all subscribed points were found
          if (subscribedPoints.length > 0)
            Alert.alert(
              'Uwaga',
              `Przy przechodzeniu na nową wersję danych nie udało się znaleźć wszystkich przez Ciebie punktów: ${subscribedPoints.map(
                p => '' + p.street + ', ',
              )}`,
            );
          // add points to database
          return PointsDAO.createSzopPointsList({
            version: version,
            list: points,
          });
        })
    );
  };

  const checkDataSync = async () => {
    setIsLoading(true);
    checkIsDataVersionSync()
      .then(({sync, v}) => {
        if (!sync) {
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

  return <View />;
};

export default DatabaseSyncManager;
