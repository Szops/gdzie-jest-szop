import {View, Text, FlatList} from 'react-native';
import React from 'react';
import PointListItem from './PointListItem';

export default function PointsList({points, searchPhrase}) {
  const renderItem = item => <PointListItem address={item.title} />;
  return (
    <FlatList
      data={points.filter(p =>
        String(p.title.toLowerCase()).includes(
          String(searchPhrase.toLowerCase()),
        ),
      )}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => renderItem(item)}
      keyExtractor={item => item.point_id}
      style={{width: '100%'}}
    />
  );
}
