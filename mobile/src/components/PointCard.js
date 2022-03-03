import {View, Text} from 'react-native';
import React from 'react';
import {HugeText, NormalText, SmallText} from './Text';
import {CardWrapper} from './Wrapper';

export default function PointCard({address, description, dates, item}) {
  return (
    <CardWrapper>
      <HugeText>{address}</HugeText>
      <SmallText>{description}</SmallText>
      <NormalText>{dates}</NormalText>
    </CardWrapper>
  );
}
