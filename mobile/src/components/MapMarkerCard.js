import {Switch, Alert} from 'react-native';
import styled from 'styled-components';
import {
  navDarkColor,
  tintColor,
  switchFalse,
  thumbColor,
} from '../constants/colors';
import {HugeText, NormalText} from './Text';
import React, {useState, useEffect, useContext} from 'react';
import {MarkerContext} from '../context/MarkerContextProvider';
import {TextInput} from 'react-native-gesture-handler';
import {NotificationContext} from '../context/NotificationContextProvider';
import PushNotification from 'react-native-push-notification';

const StyledMarkerCard = styled.View`
  background-color: ${navDarkColor};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  transition-delay: 1s;
  display: ${props => (props.markerHidden ? 'none' : 'flex')};
  padding: 30px;
  width: 100%;
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
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
`;

export default function MapMarkerCard() {
  const [dates, setDates] = useState([]);
  const {markerHidden, marker} = useContext(MarkerContext);

  const toggleSwitch = async () => {
    if (marker.isNotificationsEnabled) {
      await marker.turnOffNotifications();
    } else {
      await marker.turnOnNotifications();
    }
    PushNotification.getScheduledLocalNotifications(console.log);
  };

  useEffect(() => {
    if (marker.openingDates != undefined)
      marker.openingDates
        .fetch()
        .then(dates => setDates(dates.map(date => date.date)));
  }, [marker]);

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
      <HugeText>Address: {marker.street}</HugeText>
      <NormalText>{marker.description}</NormalText>
      <NormalText>Nearest schedule:</NormalText>
      <StyledRow>
        {dates
          .filter(date => date > Date.now())
          .slice(0, 2)
          .map(date => (
            <NormalText key={date}>{date.toLocaleString()}</NormalText>
          ))}
      </StyledRow>
    </StyledMarkerCard>
  );
}
