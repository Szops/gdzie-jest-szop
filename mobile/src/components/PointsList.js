import {FlatList} from 'react-native';
import React from 'react';
import PointListItem from './PointListItem';

export default function PointsList({points, searchPhrase}) {
  const renderItem = item => <PointListItem point={item} />;
  return (
    <FlatList
      data={points.filter(p =>
        String(p.street.toLowerCase()).includes(
          String(searchPhrase.toLowerCase()),
        ),
      )}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => renderItem(item)}
      keyExtractor={item => item.pointId}
      style={{width: '100%'}}
    />
  );
}
