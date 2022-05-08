import {View, Button} from 'react-native';
import React, {useEffect} from 'react';
import PointsDAO from '../database/PointsDAO';
import withObservables from '@nozbe/with-observables';
import PushNotification from 'react-native-push-notification';

const NotificationManager = ({points}) => {
  const syncNotifications = () => {
    PushNotification.cancelAllLocalNotifications();
    points
      .filter(point => point.isNotificationsEnabled)
      .forEach(point => {
        point.openingDates
          .fetch()
          .then(dates => {
            dates.forEach(date => {
              if (date.date > Date.now()) {
                PushNotification.localNotificationSchedule({
                  channelId: 'szop-nt',
                  title: 'Przypomnienie o dostępności punktu',
                  message:
                    'Punkt ' + point.street + ' będzie wkrótce dostępny!',
                  date: new Date(Number(date.date) - 3600000), //godzine wcześniej
                  allowWhileIdle: true,
                  soundName: 'notification_sound.wav',
                  sound: 'notification_sound.wav',
                  playSound: true,
                  vibrate: true,
                });
                PushNotification.localNotificationSchedule({
                  channelId: 'szop-nt',
                  title: 'Przypomnienie o zamknięciu punktu',
                  message: 'Punkt ' + point.street + ' właśnie się zamknął!',
                  date: new Date(Number(date.date) + 7200000), // 2 godziny później
                  allowWhileIdle: true,
                  soundName: 'notification_sound.wav',
                  sound: 'notification_sound.wav',
                  playSound: true,
                  vibrate: true,
                });
              }
            });
          })
          .catch(e => console.error(e.message));
      });
  };

  useEffect(() => {
    syncNotifications();
  }, [points]);

  return <View />;
};

export default withObservables(['points'], ({}) => ({
  points: PointsDAO.getPoints().observeWithColumns([
    'is_notifications_enabled',
  ]),
}))(NotificationManager);