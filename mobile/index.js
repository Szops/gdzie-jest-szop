/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification, {Importance} from 'react-native-push-notification';

//Conf for notification
PushNotification.configure({
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },

  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
    //notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  permissions: {
    alert: true,
    badge: true,
    sound: true,
    vibrate: true,
  },
  requestPermissions: true,
  popInitialNotification: true,
  requestPermissions: Platform.OS === 'ios',
});

PushNotification.createChannel({
  channelId: 'szop-nt', // (required)
  channelName: 'Szop Notifications', // (required)
  channelDescription: 'Notifications from SZOP App', // (optional) default: undefined.
  playSound: true, // (optional) default: true
  soundName: 'notification_sound.wav',
  importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
  vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
});

AppRegistry.registerComponent(appName, () => App);
