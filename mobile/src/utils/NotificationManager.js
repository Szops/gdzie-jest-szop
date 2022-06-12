import {View, Button} from 'react-native';
import React, {useEffect, useContext} from 'react';
import PointsDAO from '../database/PointsDAO';
import withObservables from '@nozbe/with-observables';
import PushNotification from 'react-native-push-notification';
import {NotificationContext} from '../context/NotificationContextProvider';

const NotificationManager = ({points}) => {
  const {offset} = useContext(NotificationContext);
  const {muted} = useContext(NotificationContext);
  console.log(offset);
  console.log(muted);
  const syncNotifications = () => {
    PushNotification.cancelAllLocalNotifications();
    points
      .filter(point => point.isNotificationsEnabled)
      .forEach(point => {
        point.openingDates
          .fetch()
          .then(dates => {
            const foundDate = dates.find(date => date.date > Date.now());
            if (foundDate !== undefined) {
              PushNotification.localNotificationSchedule({
                channelId: 'szop-nt',
                title: 'Przypomnienie o dostępności punktu',
                message: 'Punkt ' + point.street + ' będzie wkrótce dostępny!',
                date: new Date(Number(foundDate.date) - offset * 60000),
                allowWhileIdle: true,
                soundName: 'notification_sound.wav',
                sound: 'notification_sound.wav',
                playSound: !muted,
                vibrate: true,
                repeatType: 'week',
                repeatTime: 2,
              });
              PushNotification.localNotificationSchedule({
                channelId: 'szop-nt',
                title: 'Przypomnienie o zamknięciu punktu',
                message: 'Punkt ' + point.street + ' właśnie się zamknął!',
                date: new Date(Number(foundDate.date) + 7200000), // 2 godziny później
                allowWhileIdle: true,
                soundName: 'notification_sound.wav',
                sound: 'notification_sound.wav',
                playSound: !muted,
                vibrate: true,
                repeatType: 'week',
                repeatTime: 2,
              });
            }
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
