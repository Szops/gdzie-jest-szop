import styled from 'styled-components';
import {textDarkColor, tintColor} from '../constants/colors';

export const CardWrapper = styled.View`
  padding: 10px;
  margin: 8px;
  border-radius: 5px;
  border-width: 2px;
  border-color: ${tintColor};
  background-color: white;
  elevation: 8;
`;

export const ScreenWrapper = styled.View`
  flex: 1;
  justify-content: ${props => props.home? 'flex-start' : 'center'};
  align-items: center;
`;
