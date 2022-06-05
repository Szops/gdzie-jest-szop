import {View, Text, ScrollView, FlatList} from 'react-native';
import {HugeTextList} from './Text';
import React, {useState, useContext, useEffect} from 'react';
import PointListItem from './PointListItem';
import {CardWrapper, SectionWrapper} from './Wrapper';
import {LanguageContext} from '../context/LanguageContextProvider';

export default function PointsList({points, searchPhrase}) {
  const renderItem = item => <PointListItem point={item} />;
  const {text, selectedLanguage, setSelectedLanguage} =
    useContext(LanguageContext);

  return (
    <FlatList
      style={{width: '90%'}}
      data={points
        .filter(p => p.isNotificationsEnabled == 1)
        .filter(p =>
          p.street.toLowerCase().includes(searchPhrase.toLowerCase()),
        )}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => renderItem(item)}
      keyExtractor={item => item.pointId}
      ListEmptyComponent={<HugeTextList>{text.listEmpty}</HugeTextList>}
    />
  );
}
