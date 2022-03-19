import styled from 'styled-components';
import {textDarkColor, tintColor} from '../constants/colors';

export const CardWrapper = styled.View`
  padding: 10px 0 10px 0;
  margin: 8px 0 8px 0;
  flex-direction: row;
  justify-content: space-between;
`;

export const ScreenWrapper = styled.View`
  flex: 1;
  justify-content: ${props => (props.home ? 'flex-start' : 'center')};
  align-items: center;
  border-top-left-radius: ${props => (props.list ? 25 : 0)};
  border-top-right-radius: ${props => (props.list ? 25 : 0)}; ;
`;
