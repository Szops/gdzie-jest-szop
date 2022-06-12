import React, {useState, createContext, useEffect} from 'react';
import {Alert} from 'react-native';
import {database} from '../database/db';

export const NotificationContext = createContext({});

const NotificationContextProvider = ({children}) => {
  const [offset, setOffset] = useState(null);
  const [muted, setMuted] = useState(null);

  const mute = () => {
    setMuted(true);
  };

  const unmute = () => {
    setMuted(false);
  };

  const setMinutes = minutes => {
    setOffset(minutes);
  };

  useEffect(() => {
    database.localStorage
      .get('notifications_muted')
      .then(notificationsMuted => {
        if (notificationsMuted === undefined) setMuted(false);
        else setMuted(notificationsMuted);
      })
      .catch(e => Alert.alert(e.message));

    database.localStorage
      .get('notifications_offset')
      .then(notificationsOffset => {
        if (notificationsOffset === undefined) setOffset(30);
        else setOffset(notificationsOffset);
      })
      .catch(e => Alert.alert(e.message));
  }, []);

  useEffect(() => {
    if (offset !== null)
      database.localStorage.set('notifications_offset', offset);
  }, [offset]);
  useEffect(() => {
    if (muted !== null) database.localStorage.set('notifications_muted', muted);
  }, [muted]);

  return (
    <NotificationContext.Provider
      value={{offset, muted, mute, unmute, setMinutes, setOffset, setMuted}}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;
