import styled from "styled-components";


export const Wrapper = styled.div`
display:flex;
flex-wrap:wrap;
flex-direction:column;
width:85%;
// border:2px solid green;
flex-wrap:wrap;
align-items:center;
margin:3em;
`

export const Heading = styled.span`
// border:2px solid red;
font-size:70px;
font-weight:700;
background: -webkit-linear-gradient(360deg, rgba(0,219,222,1) 1%, rgba(118,116,237,1) 50%, rgba(252,0,255,1) 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
@media (max-width: 500px) {
    font-size:35px;
    width:100%;
   }
`

export const BodyFlex  = styled.div`
display:flex;
width:35%;
align-items:center;
@media (max-width: 500px) {

    width:100%;
   }
`
export const MiniFlex = styled.div`
display:flex;
flex-direction:column;
padding:5px;
`
export const Divider= styled.div`
height:2px;
width:100%;
background: rgb(121,24,242);
background: linear-gradient(93deg, rgba(121,24,242,1) 50%, rgba(72,1,255,1) 100%);
`

export const Body = styled.div`
font-size:28px;
color:${props=>props.txtCol};
width:100%;
@media (max-width: 500px) {
    font-size:20px;
    width:100%;
   }
`