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

const StyledMarkerCard = styled.View`
  /* height: 200px; */
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

export default function MapMarkerCard() {
  const [dates, setDates] = useState([]);
  const {markerHidden, marker} = useContext(MarkerContext);
  const toggleSwitch = async () => {
    if (marker.isNotificationsEnabled) {
      await marker.turnOffNotifications();
    } else {
      await marker.turnOnNotifications();
    }
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
      <HugeText>{marker.street}</HugeText>
      <NormalText>{marker.description}</NormalText>
      {dates
        .filter(date => date > Date.now())
        .map(date => (
          <NormalText key={date}>{date.toLocaleString()}</NormalText>
        ))}
    </StyledMarkerCard>
  );
}
