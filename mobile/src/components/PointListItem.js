import {Switch, View} from 'react-native';
import {HugeText, NormalText} from './Text';
import {CardWrapper} from './Wrapper';
import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import {
  tintColor,
  switchFalse,
  thumbColor,
  iconColor,
} from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const StyledCardRow = styled.View`
  padding: 0;
  margin: 0;
  flex-direction: row;
  justify-content: space-between;
`;

export default function PointListItem({point}) {
  const [dates, setDates] = useState([]);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (point.openingDates != undefined)
      point.openingDates
        .fetch()
        .then(dates => setDates(dates.map(date => date.date)));
  }, [point]);

  const toggleSwitch = async () => {
    return point.isNotificationsEnabled
      ? await point.turnOffNotifications()
      : await point.turnOnNotifications();
  };
  return (
    <CardWrapper>
      <StyledCardRow>
        <Icon
          name={visible ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={30}
          color={iconColor}
        />

        <HugeText onPress={() => setVisible(!visible)}>{point.street}</HugeText>
        <Switch
          trackColor={{false: switchFalse, true: tintColor}}
          thumbColor={thumbColor}
          onValueChange={toggleSwitch}
          value={point.isNotificationsEnabled}
        />
      </StyledCardRow>
      {visible && (
        <>
          <NormalText>{point.description}</NormalText>
          {dates
            .filter(date => date > Date.now())
            .slice(0, 2)
            .map(date => (
              <NormalText key={date}>{date.toLocaleString()}</NormalText>
            ))}
        </>
      )}
    </CardWrapper>
  );
}
