import {Switch, Text, View} from 'react-native';
import styled from 'styled-components';
import {Dimensions} from 'react-native';
import {
  temporaryNavColor,
  navDarkColor,
  tintColor,
  textLightColor,
  switchFalse,
  thumbColor,
} from '../constants/colors';
import {HugeText} from './Text';
import {CardWrapper} from './Wrapper';
import React, {useState} from 'react';

const windowWidth = Dimensions.get('window').width;

const StyledCalloutView = styled.View`
  height: 200px;
  width: ${windowWidth * 0.8};
  background-color: ${navDarkColor};
  border-radius: 10px;
`;

export default function CalloutCard({address}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <StyledCalloutView>
      <HugeText>{address}</HugeText>
      <Switch
        trackColor={{false: switchFalse, true: tintColor}}
        thumbColor={thumbColor}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </StyledCalloutView>
  );
}
