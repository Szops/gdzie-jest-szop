import {SectionList} from 'react-native';
import {HugeText} from './Text';
import React from 'react';
import PointListItem from './PointListItem';

export default function PointsList({points, searchPhrase}) {
  const renderItem = item => <PointListItem address={item.street} />;

  const data = [
    {
      title: 'Stare Miasto i Śródmieście',
      data: points
        .filter(p => p.sector.includes('1'))
        .filter(p =>
          String(p.street.toLowerCase()).includes(
            String(searchPhrase.toLowerCase()),
          ),
        ),
    },
    {
      title: 'Krzyki',
      data: points
        .filter(p => p.sector.includes('2'))
        .filter(p =>
          String(p.street.toLowerCase()).includes(
            String(searchPhrase.toLowerCase()),
          ),
        ),
    },
    {
      title: 'Fabryczna',
      data: points
        .filter(p => p.sector.includes('3'))
        .filter(p =>
          String(p.street.toLowerCase()).includes(
            String(searchPhrase.toLowerCase()),
          ),
        ),
    },
    {
      title: 'Psie Pole',
      data: points
        .filter(p => p.sector.includes('4'))
        .filter(p =>
          String(p.street.toLowerCase()).includes(
            String(searchPhrase.toLowerCase()),
          ),
        ),
    },
  ];

  return (
    <SectionList
      sections={data}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => renderItem(item)}
      renderSectionHeader={({section: {title}}) => <HugeText>{title}</HugeText>}
      keyExtractor={item => item.pointId}
      style={{width: '100%'}}
    />
  );
}
