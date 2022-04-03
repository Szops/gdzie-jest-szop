import styled from 'styled-components';
import React, {useContext} from 'react';
import {Title} from '../components/Text';
import {LanguageContext} from '../context/LanguageContextProvider';
import {temporaryNavColor} from '../constants/colors';

const StyledHeader = styled.View`
  padding-top: 10px;
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
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  margin-left: 5%;
  width: 90%;
  padding-left: 10%;
  border-radius: 25px;
  background-color: ${temporaryNavColor};
`;

export const ListHeader = ({searchPhrase, setSearchPhrase}) => {
  const {text} = useContext(LanguageContext);
  return (
    <StyledHeader>
      <Title>{text.pointsTitle}</Title>
      <StyledInput
        placeholder="Search"
        value={searchPhrase}
        onChangeText={setSearchPhrase}
        placeholderTextColor="white"
      />
      <StyledLine />
    </StyledHeader>
  );
};
