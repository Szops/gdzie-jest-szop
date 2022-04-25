import {Switch, Alert} from 'react-native';
import styled from 'styled-components';
import {
  navDarkColor,
  tintColor,
  switchFalse,
  thumbColor,
} from '../constants/colors';
import {HugeText, NormalText} from './Text';
import React, {useState, useContext} from 'react';
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
const setNotification = (date, pointName) => {
  PushNotification.localNotificationSchedule({
    channelId: 'szop-nt',
    title: 'Przypomnienie o dostępności punktu',
    message: 'Punkt o nazwie ' + pointName + ' będzie wkrótce dostępny!',
    date: date,
    allowWhileIdle: true,
    soundName: 'notification_sound.wav',
    sound: 'notification_sound.wav',
    playSound: true,
    vibrate: true,
  });
};

export default function MapMarkerCard() {
  const {markerHidden, marker} = useContext(MarkerContext);
  const toggleSwitch = async () => {
    return marker.isNotificationsEnabled
      ? await marker.turnOffNotifications()
      : await marker.turnOnNotifications();
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
              setNotification(new Date(Date.now() + 5 * 1000), 'Rynek 25');
            }}
            value={marker.isNotificationsEnabled}
            //marker.street
          />
        </StyledRow>
      </StyledRow>
      <HugeText>{marker.street}</HugeText>
      <NormalText>{marker.description}</NormalText>
    </StyledMarkerCard>
  );
}
