import {Switch, Alert} from 'react-native';
import styled from 'styled-components';
import {
  navDarkColor,
  tintColor,
  switchFalse,
  thumbColor,
} from '../constants/colors';
import {HugeText, NormalText} from './Text';
import React, {useContext} from 'react';
import {MarkerContext} from '../context/MarkerContextProvider';
import PushNotification from 'react-native-push-notification';

const StyledMarkerCard = styled.View`
  height: 200px;
  width: 100%;
  background-color: ${navDarkColor};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  position: absolute;
  bottom: 0;
  transition-delay: 1s;
  display: ${props => (props.markerHidden ? 'none' : 'flex')};
  padding: 30px;
`;

const StyledIcon = styled.View`
  height: 70px;
  width: 70px;
  border-radius: 20px;
  background-color: ${tintColor};
`;

const StyledRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
`;

//ustawianie przypomnienia
//date - data przypomniania jako instancja Date
//pointName - nazwa punktu do wyświetlenia w powiadomieniu
const setNotification = (pointId, date, pointName) => {
  PushNotification.localNotificationSchedule({
    id: pointId,
    channelId: 'szop-nt',
    title: 'Your SZOP point is available',
    message: 'SZOP point on ' + pointName + ' will be available soon!',
    date: date,
    allowWhileIdle: true,
    soundName: 'notification_sound.wav',
    sound: 'notification_sound.wav',
    playSound: true,
    vibrate: true,
    repeatTime: 1,
  });
};

export default function MapMarkerCard() {
  const {markerHidden, marker} = useContext(MarkerContext);
  const toggleSwitch = async () => {
    if (marker.isNotificationsEnabled) {
      PushNotification.cancelLocalNotification(marker.pointId);
      await marker.turnOffNotifications();
    } else {
      setNotification(
        marker.pointId,
        new Date(Date.now() + 15 * 1000),
        marker.street,
      );
      await marker.turnOnNotifications();
    }

    PushNotification.getScheduledLocalNotifications(console.log);
  };

  return (
    <StyledMarkerCard markerHidden={markerHidden}>
      <StyledRow>
        <StyledIcon></StyledIcon>
        <StyledRow>
          <NormalText>Reminder:</NormalText>
          <Switch
            trackColor={{false: switchFalse, true: tintColor}}
            thumbColor={thumbColor}
            onValueChange={() => {
              toggleSwitch();

              //do demo (pokazowe powiadomienie)
            }}
            value={marker.isNotificationsEnabled}
          />
        </StyledRow>
      </StyledRow>
      <HugeText>{marker.street}</HugeText>
      <NormalText>{marker.description}</NormalText>
    </StyledMarkerCard>
  );
}
