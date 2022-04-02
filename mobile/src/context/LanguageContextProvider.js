import React, {createContext, useState} from 'react';

import * as en from '../constants/languages/en.json';
import * as pl from '../constants/languages/pl.json';

export const LanguageContext = createContext({});

const languageObject = {
  en: en,
  pl: pl,
};

const LanguageContextProvider = ({children}) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const text = {...languageObject[selectedLanguage]};
  return (
    <LanguageContext.Provider
      value={{selectedLanguage, setSelectedLanguage, text}}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
