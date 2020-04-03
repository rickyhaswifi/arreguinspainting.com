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
  font-size:12px;
}

/* transform: .3s all;
&:hover{
  background: -webkit-linear-gradient(45deg, #1050A6, #05DCD2,#20B24D,#3D9C4F,#FABF31,#F9393B,#BD1A71,#2D0071) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
} */

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