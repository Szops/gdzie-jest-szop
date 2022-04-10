import styled from 'styled-components';
import {darkTileColor} from '../constants/colors';

export const CardWrapper = styled.View`
  padding: 10px 100px 10px 0px;
  margin: 8px 10px 8px 10px;
  width: 90%;
  left: 10%;
  flex-direction: row;
  justify-content: space-between;
`;

export const SectionWrapper = styled.View`
  padding: 10px 0px 10px 0px;
  margin: 0px 139px 0px 0px;
  flex-direction: row;
  justify-content: center;
  background-color: ${darkTileColor};
  border-radius: 10px;
`;

export const ScreenWrapper = styled.View`
  flex: 1;
  justify-content: ${props => (props.home ? 'flex-start' : 'center')};
  align-items: center;
`;
