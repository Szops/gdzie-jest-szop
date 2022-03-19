import {View, Button, ImageBackground, StyleSheet, Text} from 'react-native';
import React, {useContext} from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import {Title, TileHeader, TileText} from '../components/Text';
import {darkTileColor, tintColor, homeImageColor, darkTintColor} from '../constants/colors';
import {HugeText, NormalText} from '../components/Text';
import {Lorem1} from '../constants/text.json'
import {LanguageContext} from '../context/LanguageContextProvider';
import {ScreenWrapper} from '../components/Wrapper';
import { withTheme } from 'styled-components';
import image from '../images/homeImage.jpg'
import {HomeCard} from '../components/HomeCard';

import { getPixelSizeForLayoutSize } from 'react-native/Libraries/Utilities/PixelRatio';

export const helloSzopScreenName = 'HelloSzopScreen';

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 6,
    opacity: 0.5
  },
  scroll: {
    width: '90%',
  },
  title: {
    position: "absolute",
    opacity: 1,
    left: '5%',
  },
  header: {
    position: "absolute",
    right: '10%',
  },
  text: {
    position: "absolute",
    top: '55%',
    width: '80%',
    left: '10%',
  }
});

export default function HelloSzopScreen() {
  const {text, selectedLanguage, setSelectedLanguage} =
    useContext(LanguageContext);
  return (
    <ScreenWrapper home>
      <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1}}
          style={styles.scroll}>
        <HomeCard primary>
          <ImageBackground 
            source={image}
            resizeMode="cover"
            imageStyle={{borderRadius: 25}}
            style={styles.image}> 
          </ImageBackground>
          <Title style={styles.title} upper>GDZIE JEST</Title>
          <Title style={styles.title}>SZOP?</Title>

        </HomeCard>
        
        <HomeCard green>
          <TileHeader style={styles.header}>ABOUT{'\n'}THE{'\n'}PROJECT</TileHeader>
          <TileText style={styles.text}>{Lorem1}</TileText>
        </HomeCard>
        <HomeCard>
          <TileHeader style={styles.header}>ABOUT{'\n'}THE{'\n'}PROJECT</TileHeader>
          <TileText style={styles.text}>{Lorem1}</TileText>
        </HomeCard>
        <HomeCard>
          <TileHeader style={styles.header}>ABOUT{'\n'}THE{'\n'}PROJECT</TileHeader>
          <TileText style={styles.text}>{Lorem1}</TileText>
        </HomeCard>
        <HomeCard>
          <TileHeader style={styles.header}>ABOUT{'\n'}THE{'\n'}PROJECT</TileHeader>
          <TileText style={styles.text}>{Lorem1}</TileText>
        </HomeCard>
        <HomeCard last> 
          <TileHeader style={styles.header}>ABOUT{'\n'}THE{'\n'}PROJECT</TileHeader>
          <TileText style={styles.text}>{Lorem1}</TileText>
        </HomeCard>
      </ScrollView>
      </ScreenWrapper>

                /*<Button
        title={text.language + ': ' + selectedLanguage}
        onPress={() =>
          setSelectedLanguage(selectedLanguage == 'en' ? 'pl' : 'en')
        }
      />*/
  );
}
