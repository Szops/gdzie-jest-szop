import {Switch} from 'react-native';
import {HugeText} from './Text';
import {CardWrapper} from './Wrapper';
import React, {useState} from 'react';
import {tintColor, switchFalse, thumbColor} from '../constants/colors';

export default function PointListItem({point}) {
  const toggleSwitch = async () => {
    return point.isNotificationsEnabled
      ? await point.turnOffNotifications()
      : await point.turnOnNotifications();
  };
  return (
    <CardWrapper>
      <HugeText>{point.street}</HugeText>
      <Switch
        trackColor={{false: switchFalse, true: tintColor}}
        thumbColor={thumbColor}
        onValueChange={toggleSwitch}
        value={point.isNotificationsEnabled}
      />
    </CardWrapper>
  );
}
