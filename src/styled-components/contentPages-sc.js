import styled from 'styled-components';
import Deck from '../shared/images/deck.jpeg'

export const ContentHero = styled.section`
background: url(${Deck}) no-repeat center center fixed;
background-size: cover;
width: 100%;
height: 400px;
position: relative;
&::before{
  background-color: rgba(1,170,226,0.5)!important;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
  }
`;