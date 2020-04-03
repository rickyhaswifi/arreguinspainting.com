import styled from 'styled-components'

export const GlobalCrunchWrapSupreme = styled.section`

.navbar-brand a{
  transform: .3s all !important;
&:hover{
  background: -webkit-linear-gradient(45deg, #1050A6, #05DCD2,#20B24D,#3D9C4F,#FABF31,#F9393B,#BD1A71,#2D0071) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}
}

.button.is-link{
  width:100%;
  background:var(--DeepBlue);
}

p{
  font-family: 'Poppins', sans-serif !important;
  font-weight: 400;
  padding: 1.5em 0em;
  justify-content: center;
  letter-spacing:0.004em;
  line-height:1.58em;
  font-size: 22px;
  font-family: 'Raleway', sans-serif;
  text-align:justify;
  word-spacing:-2px;
  text-align-last:left;
}
.swatches-picker{
  padding-top: 1em;
  margin: auto !important;
}
@media only screen and (max-width: 700px) {
    .swatches-picker{
    width:280px!important;
    margin: auto !important;
  }
}

header{
  font-family: 'Poppins', sans-serif !important;
}

.italic{
  font-style: italic;
  background-image: linear-gradient(to top, 
  rgba(256,256,31,0.2) 50%, rgba(255,0,0,0) 50%);
  width: auto;
  display: inline;
}

img {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}

`;