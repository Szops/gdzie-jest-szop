import styled from 'styled-components';
import {Switch, View} from 'react-native';

import React, {useContext} from 'react';
import {NotificationContext} from '../context/NotificationContextProvider';
import {LanguageContext} from '../context/LanguageContextProvider';
import {ScreenWrapper} from '../components/Wrapper';
import {HomeBanner} from '../components/HomeBanner';
import {
  navDarkColor,
  tintColor,
  switchFalse,
  thumbColor,
} from '../constants/colors';
import {HugeText, NormalText} from '../components/Text';

import {TextInput} from 'react-native-gesture-handler';

export const SettingsScreenName = 'SettingsScreen';

const StyledScrollView = styled.ScrollView`
  width: 90%;
`;

const StyledRow = styled.View`
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
`;

export default function SettingsScreen() {
  //tymczasowe dla personalizacji powiadomień
  const {offset} = useContext(NotificationContext);
  const {setOffset} = useContext(NotificationContext);
  const {muted} = useContext(NotificationContext);
  const {setMuted} = useContext(NotificationContext);
  const toggleSwitchMuted = () => {
    if (muted) {
      setMuted(false);
    } else {
      setMuted(true);
    }
  };
  return (
    <ScreenWrapper home>
      <StyledScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <HomeBanner textUpper={'Notifications'} textBottom={'SETTINGS'} />
        <StyledRow>
          <HugeText>Muted: </HugeText>
          <Switch
            trackColor={{false: switchFalse, true: tintColor}}
            value={muted}
            onValueChange={() => {
              toggleSwitchMuted();
            }}
            tintColors={{true: tintColor}}
            label="Wycisz"
          />
        </StyledRow>
        <StyledRow>
          <HugeText>Launch before [minutes]:</HugeText>
          <TextInput
            value={offset.toString()}
            placeholder="15"
            keyboardType="numeric"
            style={{
              color: tintColor,
              backgroundColor: navDarkColor,
              padding: 0,
              margin: 10,
            }}
            onChangeText={text => {
              setOffset(Number(text));
            }}
          />
        </StyledRow>
      </StyledScrollView>
    </ScreenWrapper>
  );
}
