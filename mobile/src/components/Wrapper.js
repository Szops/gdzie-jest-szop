import styled from 'styled-components';
import {darkTileColor} from '../constants/colors';

export const CardWrapper = styled.View`
  background: ${darkTileColor};
  border-radius: 25px;
  elevation: 7;
  margin-top: 4%;
  margin-bottom: 4%;
  padding: 20px;
  padding-bottom: 10px;
`;

export const SectionWrapper = styled.View`
  padding: 10px 0px 10px 0px;
  margin: 0px 139px 0px 0px;
  width: 90%;
  left: 40%;
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
