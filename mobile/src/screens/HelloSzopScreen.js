import styled from 'styled-components';
import React, {useContext} from 'react';
import {LanguageContext} from '../context/LanguageContextProvider';
import {ScreenWrapper} from '../components/Wrapper';
import {HomeCard} from '../components/HomeCard';
import {HomeBanner} from '../components/HomeBanner';
import {TextInput, Button, Alert, TouchableOpacity} from 'react-native';
import {getPoints} from '../api/szopPoints';
import PointsDAO from '../database/PointsDAO';
import {AboutScreenName} from './AboutScreen';
import {mapScreenName} from './MapScreen';
import {NewsScreenName} from './NewsScreen';
import {SettingsScreenName} from './SettingsScreen';

export const helloSzopScreenName = 'HelloSzopScreen';

const StyledScrollView = styled.ScrollView`
  width: 90%;
`;

export default function HelloSzopScreen({navigation}) {
  const [input, setInput] = React.useState();
  const [input2, setInput2] = React.useState();

  const {text, selectedLanguage, setSelectedLanguage} =
    useContext(LanguageContext);

  const deleteDataabse = async () => await PointsDAO.deleteAllLists();

  const updateDataabse = async () => {
    await PointsDAO.deleteAllLists();
    await getPoints()
      .then(points =>
        PointsDAO.createSzopPointsList({version: 'test', list: points}),
      )
      .catch(error => alert(error.message));
  };

  return (
    <ScreenWrapper home>
      <StyledScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <HomeBanner textUpper={'GDZIE JEST'} textBottom={'SZOP?'} />
        <HomeCard
          onPress={() => navigation.navigate(AboutScreenName)}
          readMore={'Read nore about the project...'}
          iconName="home"
          green
          header={text.tileHeader[0]}
          text={text.tileText[0]}
        />
        <HomeCard
          onPress={() => navigation.navigate(mapScreenName)}
          readMore={'Move to map screen...'}
          iconName="map"
          header="Check SZOP points on map"
          // text={text.tileText[0]}
        />
        <HomeCard
          onPress={() => navigation.navigate(SettingsScreenName)}
          readMore={'Manage notifications settings...'}
          iconName="settings"
          header="Settings"
          // text={text.tileText[0]}
        />
        <HomeCard
          onPress={() => navigation.navigate(NewsScreenName)}
          readMore={'Check some articles...'}
          iconName="web"
          header="News"
          // text={text.tileText[0]}
        />
        <HomeCard
          iconName="restore-from-trash"
          header={text.tileHeader[1]}
          text={text.tileText[1]}
        />
        <HomeCard
          iconName="sentiment-very-satisfied"
          header={text.tileHeader[2]}
          text={text.tileText[2]}
        />
        <HomeCard
          iconName="message"
          header={text.tileHeader[3]}
          text={text.tileText[3]}
          last
        />

        {/* <Button
          title="DEBUG ONLY - Pobierz bazę danych"
          onPress={updateDataabse}
        /> */}
        {/* Przyciski tylko do demo, później zrobimy automatyczne pobieranie w useEffect */}
        {/* <Button title="Usuń bazę danych" onPress={deleteDataabse} /> */}
      </StyledScrollView>
      {/*<HugeText>{text.appName}</HugeText>
      <Button
        title={text.language + ': ' + selectedLanguage}
        onPress={() =>
          setSelectedLanguage(selectedLanguage == 'en' ? 'pl' : 'en')
        }
      />
      */}
    </ScreenWrapper>
  );
}
