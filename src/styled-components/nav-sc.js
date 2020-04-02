import styled from 'styled-components'

export const NavWrap = styled.section`
`;

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
  font-size:0.8em;
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
padding:6px 8px;
border-radius:5px;
`; 