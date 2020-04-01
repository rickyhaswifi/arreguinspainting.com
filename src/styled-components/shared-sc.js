import styled from 'styled-components';
import Deck from '../shared/images/deck.jpeg'


export const TitleMain = styled.h1`
text-transform:uppercase;
font-weight:900!important;
font-size:2.7em;
letter-spacing:2px;
color:var(--DeepBlue) !important;
text-align:center;

@media (max-width: 1000px) {
  font-size:2em;
}

`;

export const TitleMainWht = styled.h2`
color:white;
text-align:center;
text-transform:uppercase;
font-weight:900!important;
font-size:3.2em;
letter-spacing:1px;
outline-color:white;

@media (max-width: 1000px) {
  font-size:2em;
}
/* @media (max-width: 850px) {
  font-size:2em;
} */

&:after{
  content: ""; 
    display: block;
    margin: 0 auto;
    width: 25%;
    padding-top: 2px;
    border-bottom: 1px solid var(--GoldCoast);
    margin-bottom:20px;
}

`;

export const TitleSub = styled.h1`
text-transform:capitalize;
font-weight:700!important;
font-size:2.3em;
color:var(--DeepBlue) !important;
text-align:left;
padding:.8em 0em 0em 0em!important;
`;

export const SubText = styled.p`
font-size:12px;
padding:.8em 0em 0em 0em!important;
`;

export const Spacer = styled.section`
height:3em;
`

export const CenterDis = styled.section`
margin:auto;
`;

export const FooterWrap = styled.section`
position: relative;
background:var(--DeepBlueGrad);
margin-top:-10px;
`;

export const ContentHero = styled.section`
background: url(${Deck}) no-repeat center center fixed;
background-size: cover;
width: 100%;
height:400px;
position: relative;
&::before{
  /* z-index: -1; */
  background-color: rgba(1,170,226,0.5)!important;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
  
  }
`;