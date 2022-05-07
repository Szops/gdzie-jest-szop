import styled from 'styled-components';
import React, {useContext} from 'react';
import {LanguageContext} from '../context/LanguageContextProvider';
import {ScreenWrapper} from '../components/Wrapper';
import {HomeCard} from '../components/HomeCard';
import {HomeBanner} from '../components/HomeBanner';
import {TextInput, Button, Alert} from 'react-native';
import PushNotification from 'react-native-push-notification';
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
        PointsDAO.createSzopPointsList({version: 'test', list: points}),
      )
      .catch(error => alert(error.message));
  };

  //ustawianie przypomnienia
  //date - data przypomniania jako instancja Date
  //pointName - nazwa punktu do wyświetlenia w powiadomieniu
  const setNotification = (date, pointName) => {
    Alert.alert('Dodano powiadomienie na godzine:', date.toString());
    PushNotification.localNotificationSchedule({
      channelId: 'szop-nt',
      title: 'Przypomnienie o dostępności punktu',
      message: 'Punkt o nazwie ' + pointName + ' będzie wkrótce dostępny!',
      date: date,
      allowWhileIdle: true,
      soundName: 'notification_sound.wav',
      sound: 'notification_sound.wav',
      playSound: true,
      vibrate: true,
    });
  };

  return (
    <ScreenWrapper home>
      <StyledScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <HomeBanner textUpper={'GDZIE JEST'} textBottom={'SZOP?'} />
        <HomeCard green />
        <HomeCard />
        <HomeCard />
        <HomeCard last />

        {/* Przyciski tylko do demo, później zrobimy automatyczne pobieranie w useEffect */}
        <Button title="Pobierz bazę danych" onPress={updateDataabse} />
        <Button title="Usuń bazę danych" onPress={deleteDataabse} />

        {/* Tylko do demo */}
        <TextInput
          placeholder="Godzina"
          keyboardType="numeric"
          value={input2}
          onChangeText={setInput2}
          style={{backgroundColor: 'white'}}
        />
        <TextInput
          placeholder="Minuty"
          keyboardType="numeric"
          value={input}
          onChangeText={setInput}
          style={{backgroundColor: 'white'}}
        />
        <Button
          title={'Test powiadomienia'}
          onPress={() => {
            const today = new Date();
            setNotification(
              new Date(
                2022,
                3,
                today.getDay(),
                Number(input2) - 2,
                Number(input),
                0,
                0,
              ),
              'Punkt testowy',
            );
          }}
        />
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
