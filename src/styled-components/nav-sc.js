import styled from 'styled-components'

export const LogoImage = styled.img`
max-height:65px !important;
padding-right:5px;
`;

export const LogoText = styled.h3`
font-weight:600;
font-size:1.5em;
@media (max-width: 1000px) {
  font-size:1em;
}
@media (max-width: 700px) {
  font-size:14px;
}

background: linear-gradient(to right, #1050A6, #05DCD2,#20B24D,#3D9C4F,#FABF31,#F9393B,#BD1A71,#2D0071);
  background-size: 200% 200%;
  animation: rainbow 2s ease-in-out infinite;
  background-clip: text;
  -webkit-background-clip:text;
  color:rgba(0,0,0,1);
  transition: color .2s ease-in-out;

&:hover{
  color:rgba(0,0,0,0);
}

@keyframes rainbow { 
  0%{background-position:left}
  50%{background-position:right}
  100%{background-position:left}
}

`;

export const NavItem = styled.span`
color:var(--LogoGreen);
font-weight:500 !important;
text-transform:uppercase;
letter-spacing:1px !important;
`;

export const NavCTA = styled.span`
font-weight:500 !important;
letter-spacing:1px !important;
color:white;
text-transform:uppercase;
background-color:var(--LogoGreen);
padding:8px 12px;
border-radius:5px;
`; 