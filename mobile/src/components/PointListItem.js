import {View, Text, Switch, StyleSheet} from 'react-native';
import {HugeText, NormalText, SmallText} from './Text';
import {CardWrapper} from './Wrapper';
import React, {useState} from 'react';
import {tintColor, switchFalse, thumbColor} from '../constants/colors';

export default function PointListItem({address, description, dates, item}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <CardWrapper>
      <HugeText>{address}</HugeText>
      <Switch
        trackColor={{false: switchFalse, true: tintColor}}
        thumbColor={thumbColor}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </CardWrapper>
  );
}
