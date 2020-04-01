import styled from "styled-components";

export const ServiceCard = styled.section`
position: relative !important;
display:block !important;
/* margin: 2em auto !important; */
margin: 1.5em .5em;
/* width:100%; */
width:250px;
background:#f2f2f2;
padding: 0.8em;
color:#1c1c1c;
border-radius:0 20px;
height:500px;

@media (max-width: 1000px) {
width:100%;
height:500px;
/* margin: 0em 0em 1em 0em !important; */
}

transition: .2s all;
&:hover{
  background:#08AAE2;
  transform: scale(1.05);
  box-shadow: 5px 5px 5px #000;
  h2{
    color:white!important;
  }
}

`;

export const ServiceCardMobile = styled.section`
position: relative !important;
display:block !important;
/* margin: 2em auto !important; */
margin-top:100px!important;
width:100%;
/* width:250px; */
background:#f2f2f2;
padding: 0.8em;
color:#1c1c1c;
border-radius:0 20px;
height:500px;

@media (min-width: 1000px) {
display:none!important;
}

transition: .2s all;
&:hover{
  background:#08AAE2;
  transform: scale(1.05);
  box-shadow: 5px 5px 5px #000;
  h2{
    color:white!important;
  }
}

`;

export const ServiceTitle = styled.h2`
text-transform:capitalize;
font-weight:700!important;
font-size:2em;
color:var(--DeepBlue) !important;
text-align:center;
padding:.8em 0em 0em 0em!important;
`;

export const ServiceCTA = styled.button`
height:45px;
width:100%;
font-size:20px;
font-weight:700;
letter-spacing:1px;
text-align:center;
margin: 1em 0em;
color:var(--DeepBlue);
background:var(--GoldCoast);
/* color:white;
background:var(--RedCTA); */
border-radius:10px;
`;