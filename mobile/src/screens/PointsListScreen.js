import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import PointsList from '../components/PointsList';
import {getPoints} from '../api/szopPoints';
import {HugeText} from '../components/Text';

export default function PointsListScreen() {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    setPoints(getPoints());
  }, []);

  return (
    <>
      <HugeText>Lista punktów (ilość punktów: {points.length})</HugeText>
      <PointsList points={points} />
    </>
  );
}
