import styled from "styled-components";

export const ImageWrapper = styled.div`
Width:100%;
height:100%;
// border:2px solid blue;
position:relative;
display:flex;
align-items:flex-start;
`

export const HeroImg = styled.img`
height:100%;
width:100%;
object-width:contain;
`
export const ShapeImg = styled.img`
height:100% ;
width:100%;
object-width:contain;
position:absolute;
left:0;
z-index:-1;
`
export const Circle = styled.div`
height:500px;
width:500px;
border-radius:50%;
position:absolute;
background-color:#AC32E410;
top:15%;
left:-30%;
z-index:-2;
`