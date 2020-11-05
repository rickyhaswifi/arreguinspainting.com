import styled from 'styled-components';

export const HeroBanner = styled.section`
width: 100%;
height: calc(100vh - 40px);
position: relative;
background-position: top left;
background-attachment: fixed;
&::before{
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
font-size:8em;
text-align:left;
text-transform:uppercase;
white-space: nowrap;
font-weight:900;
background: linear-gradient(180deg,rgba(148,20,51,0) 50%, rgba(148,20,51,0.5) 50%);
text-align:center;
@media (max-width: 1400px) {
font-size:5em;
}
@media (max-width: 1000px) {
font-size:4em;
}
@media (max-width: 700px) {
font-size:2.7em;
}
@media (max-width: 600px) {
font-size:2em;
}
@media (max-width: 550px) {
font-size:1.8em;
}
`;

export const HeroTextSecond = styled.h2`
padding:0em 0em 0em .2em;
color:white;
text-transform:uppercase;
font-style:italic;
text-align:left;
color:white;
text-transform:uppercase;
white-space: nowrap;
font-size:3em;
@media (max-width: 1400px) {
  font-size:2.5em;
}
@media (max-width: 700px) {
font-size:2em;
}
@media (max-width: 600px) {
font-size:1.5em;
}
`;


export const CircleImg = styled.section`
background-repeat: no-repeat;
background-size: cover;
width:100%;
height:500px;
border-radius: 10px 0;
margin:auto;
display:block;
`;

export const HomeCTA = styled.button`
width:50%;
border: none;
font-size:30px;
text-transform:uppercase;
letter-spacing:2px;
padding:10px;
text-align:center;
margin: 1em 0em;
color:white;
background: var(--GoldCoast);
border-radius:20px;
transition: all 200ms ease;
@media (max-width: 1000px) {
  font-size:25px;
  width:100%;
}
@media (max-width: 700px) {
  width:80%;
  margin:auto;
}

&:hover {
  cursor: pointer;
  background-color: #C97A03;
}
`;