import styled from 'styled-components';
import {textDarkColor, textLightColor} from '../constants/colors';

export const NormalText = styled.Text`
  color: ${textLightColor};
  font-size: 16px;
  flex-shrink: 1;
  font-weight: 100;
`;

export const SmallText = styled.Text`
  color: ${textLightColor};
  font-size: 12px;
`;

export const HugeText = styled.Text`
  color: white;
  font-size: 20px;
`;

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
  flex-shrink: 1;
  padding-left: 30px;
  font-weight: 700;
`;

export const TileText = styled.Text`
  font-size: 20px;
  color: white;
  line-height: 30px;
  font-weight: 300;
`;

export const HugeTextList = styled.Text`
  color: white;
  font-size: 20px;
  text-align: center;
  margin-top: 20%;
`;
