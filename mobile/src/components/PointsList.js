import {View, Text, FlatList} from 'react-native';
import React from 'react';
import PointCard from './PointCard';

export default function PointsList({points}) {
  const renderItem = item => (
    <PointCard
      address={item.title}
      description={item.desc}
      dates={item.dates}
    />
  );
  return (
    <FlatList
      data={points}
      renderItem={({item}) => renderItem(item)}
      keyExtractor={item => item.point_id}
    />
  );
}
