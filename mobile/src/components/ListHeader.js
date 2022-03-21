import styled from 'styled-components';
import React from 'react';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import {Title} from '../components/Text';
import {TextInput} from 'react-native-gesture-handler';
import {temporaryNavColor} from '../constants/colors';

const StyledHeader = styled.View`
  height: 170px;
  width: 100%;
  justify-content: space-around;
`;
const StyledLine = styled.View`
  border-bottom-color: grey;
  border-bottom-width: 1px;
  width: 90%;
  left: 5%;
`;
const StyledInput = styled.TextInput`
  font-size: 20px;
  margin-left: 5%;
  width: 90%;
  padding-left: 10%;
  border-radius: 25px;
  background-color: ${temporaryNavColor};
`;

export const ListHeader = ({searchPhrase, setSearchPhrase}) => {
  return (
    <StyledHeader>
      <Title>All points</Title>
      <StyledInput
        placeholder="Search"
        value={searchPhrase}
        onChangeText={setSearchPhrase}
      />
      <StyledLine />
    </StyledHeader>
  );
};
