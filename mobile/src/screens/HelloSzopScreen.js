import styled from 'styled-components';
import React, {useContext} from 'react';
import {LanguageContext} from '../context/LanguageContextProvider';
import {ScreenWrapper} from '../components/Wrapper';
import {HomeCard} from '../components/HomeCard';
import {HomeBanner} from '../components/HomeBanner';
import {TextInput, Button, Alert} from 'react-native';
import {getPoints} from '../api/szopPoints';
import PointsDAO from '../database/PointsDAO';
export const helloSzopScreenName = 'HelloSzopScreen';

const StyledScrollView = styled.ScrollView`
  width: 90%;
`;

export default function HelloSzopScreen() {
  const [input, setInput] = React.useState();
  const [input2, setInput2] = React.useState();

  const {text, selectedLanguage, setSelectedLanguage} =
    useContext(LanguageContext);

  const deleteDataabse = async () => await PointsDAO.deleteAllLists();

  const updateDataabse = async () => {
    await PointsDAO.deleteAllLists();
    await getPoints()
      .then(points =>
        PointsDAO.createSzopPointsList({version: 'unknown', list: points}),
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
        <HomeCard green header={text.tileHeader[0]} text={text.tileText[0]} />
        <HomeCard header={text.tileHeader[1]} text={text.tileText[1]} />
        <HomeCard header={text.tileHeader[2]} text={text.tileText[2]} />
        <HomeCard header={text.tileHeader[3]} text={text.tileText[3]} last />

        <Button title="Pobierz bazę danych" onPress={updateDataabse} />
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
