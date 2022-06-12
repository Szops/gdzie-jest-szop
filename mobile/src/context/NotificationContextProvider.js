import React, {useState, createContext} from 'react';

export const NotificationContext = createContext({});

const NotificationContextProvider = ({children}) => {
  const [offset, setOffset] = useState(15);
  const [muted, setMuted] = useState(false);

  const mute = () => {
    setMuted(true);
  };

  const unmute = () => {
    setMuted(false);
  };

  const setMinutes = minutes => {
    setOffset(minutes);
  };

  return (
    <NotificationContext.Provider
      value={{offset, muted, mute, unmute, setMinutes, setOffset, setMuted}}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;
