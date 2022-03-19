import styled from 'styled-components';
import {darkTileColor, darkTintColor, homeImageColor} from '../constants/colors';

 export const HomeCard = styled.View`
    background: ${props => props.primary? homeImageColor : props.green? darkTintColor : darkTileColor};
    background-image: url(image);
    border-radius: 25px;
    height: ${props => props.primary? '150px' : '327px'};
    width: 100%;
    elevation: 7;
    margin-top: 10%;
    margin-bottom: ${props => props.last? '40px' : '0px'};;
`

