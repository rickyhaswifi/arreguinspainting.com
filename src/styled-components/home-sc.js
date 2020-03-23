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
font-weight:bold;
background: linear-gradient(180deg,rgba(148,20,51,0) 50%, rgba(148,20,51,0.5) 50%);
/* , #FF1941 50% */
`;

export const HeroTextSecond = styled.h2`
color:white;
font-size:3.5em;
text-transform:uppercase;
font-weight:bold;
font-style:italic;
`;
