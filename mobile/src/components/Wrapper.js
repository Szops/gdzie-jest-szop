import styled from 'styled-components';
import {textDarkColor, tintColor} from '../constants/colors';

export const CardWrapper = styled.View`
  padding: 10px 0 10px 0;
  margin: 8px 10px 8px 10px;
  width: 90%;
  left: 10%;
  flex-direction: row;
  justify-content: space-between;
`;

export const ScreenWrapper = styled.View`
  flex: 1;
  justify-content: ${props => (props.home ? 'flex-start' : 'center')};
  align-items: center;
`;
