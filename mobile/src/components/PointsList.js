import {View, Text, ScrollView} from 'react-native';
import {HugeText} from './Text';
import React, {useState, useContext, useEffect} from 'react';
import PointListItem from './PointListItem';
import Accordion from 'react-native-collapsible/Accordion';
import {CardWrapper, SectionWrapper} from './Wrapper';
import {LanguageContext} from '../context/LanguageContextProvider';
import {navDarkColor} from '../constants/colors';

export default function PointsList({points, searchPhrase}) {
  const renderItem = item => <PointListItem point={item} />;
  const [activeSections, setActiveSections] = useState([]);
  const {text, selectedLanguage, setSelectedLanguage} =
    useContext(LanguageContext);

  const _updateSections = activeSections => {
    setActiveSections(activeSections);
  };

  const _renderSectionTitle = section => {
    return (
      <View>
        <Text>{section.content.street}</Text>
      </View>
    );
  };

  const _renderHeader = section => {
    return (
      <View>
        <SectionWrapper>
          <HugeText>{section.title}</HugeText>
        </SectionWrapper>
      </View>
    );
  };

  const _renderContent = section => {
    return (
      <View>
        {section.content.map((item, key) => (
          <View key={key}>{renderItem(item)}</View>
        ))}
      </View>
    );
  };

  const sections = [
    {
      title: text.listSelected,
      content: points
        .filter(p => p.isNotificationsEnabled == 1)
        .filter(p =>
          p.street.toLowerCase().includes(searchPhrase.toLowerCase()),
        ),
    },
    {
      title: 'Stare Miasto i Śródmieście',
      content: points
        .filter(p => p.sector.includes('1'))
        .filter(p =>
          p.street.toLowerCase().includes(searchPhrase.toLowerCase()),
        ),
    },
    {
      title: 'Krzyki',
      content: points
        .filter(p => p.sector.includes('2'))
        .filter(p =>
          p.street.toLowerCase().includes(searchPhrase.toLowerCase()),
        ),
    },
    {
      title: 'Fabryczna',
      content: points
        .filter(p => p.sector.includes('3'))
        .filter(p =>
          p.street.toLowerCase().includes(searchPhrase.toLowerCase()),
        ),
    },
    {
      title: 'Psie Pole',
      content: points
        .filter(p => p.sector.includes('4'))
        .filter(p =>
          p.street.toLowerCase().includes(searchPhrase.toLowerCase()),
        ),
    },
  ];

  return (
    <ScrollView style={{width: '100%'}}>
      <Accordion
        activeSections={activeSections}
        sections={sections}
        renderSectionTitle={_renderSectionTitle}
        renderHeader={_renderHeader}
        renderContent={_renderContent}
        onChange={_updateSections}
        underlayColor={navDarkColor}
      />
    </ScrollView>
  );
}
