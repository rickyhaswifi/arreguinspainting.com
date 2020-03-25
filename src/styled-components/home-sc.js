import styled from 'styled-components';

export const HeroBanner = styled.section`
/* background-position: top left;
background-attachment: fixed;
height:100vh; */
width: 100%;
height: calc(100vh - 40px);
position: relative;
/* background-attachment: fixed !important; */
background-position: top left;
background-attachment: fixed;
/* opacity: 0.5; */
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

export const HeroTextPrime = styled.h1`
color:white;
font-size:7em;
text-transform:uppercase;
white-space: nowrap;
font-weight:900;
background: linear-gradient(180deg,rgba(148,20,51,0) 50%, rgba(148,20,51,0.5) 50%);

@media (max-width: 769px) {
font-size:3em;
}

`;

export const HeroTextSecond = styled.h2`
padding:.5em;
color:white;
font-size:3.5em!important;
text-transform:uppercase;
font-weight:bold;
font-style:italic;

color:white;
text-transform:uppercase;
white-space: nowrap;
font-size:2em;

@media (max-width: 769px) {
font-size:2em;
}

@media (min-width: 769px) {
font-size:2em;
}
`;
