import styled from 'styled-components';
import {textDarkColor} from '../constants/colors';

export const NormalText = styled.Text`
  color: ${textDarkColor};
  font-size: 16px;
`;

export const SmallText = styled.Text`
  color: ${textDarkColor};
  font-size: 12px;
`;

export const HugeText = styled.Text`
  color: ${textDarkColor};
  font-size: 24px;
`;

// Home screen

export const Title = styled.Text`
  font-size: ${props => (props.upper ? '20px' : '35px')};
  color: white;
  left: 5%;
  font-weight: 700;
  letter-spacing: 2px;
`;

export const TileHeader = styled.Text`
  font-size: 35px;
  color: white;
  font-weight: 700;
  top: 10%;
  right: 10%;
  position: absolute;
  top: 10%;
`;

export const TileText = styled.Text`
  font-size: 20px;
  color: white;
  line-height: 30px;
  font-weight: 300;
  position: absolute;
  top: 55%;
  width: 80%;
  left: 10%;
`;
