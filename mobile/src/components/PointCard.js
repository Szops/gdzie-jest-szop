import {View, Text, Switch, StyleSheet} from 'react-native';
import {HugeText, NormalText, SmallText} from './Text';
import {CardWrapper} from './Wrapper';
import React, {useState} from 'react';
import {tintColor} from '../constants/colors';

export default function PointCard({address, description, dates, item}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <CardWrapper>
      <HugeText>{address}</HugeText>
      <Switch
        trackColor={{false: '#767577', true: tintColor}}
        thumbColor={'#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </CardWrapper>
  );
}
