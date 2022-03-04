import {} from 'react-native';
import React, {useState, useEffect, createContext} from 'react';
import {getPoints} from '../api/szopPoints';

export const PointsContext = createContext({});

const PointsContextProvider = ({children}) => {
  const [points, setPoints] = useState([]);

  const loadPoints = () => {
    getPoints().then(setPoints).catch(console.error);
  };

  useEffect(() => {
    loadPoints();
  }, []);

  return (
    <PointsContext.Provider value={{points, setPoints}}>
      {children}
    </PointsContext.Provider>
  );
};

export default PointsContextProvider;
