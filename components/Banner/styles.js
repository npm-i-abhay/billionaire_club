import styled from "styled-components";

export const BannerWrapper = styled.div`
width:100%;
display:flex;
justify-content:space-around;
// flex-wrap:wrap;
align-items:center;
background: rgb(172,50,228);
background: linear-gradient(93deg, rgba(172,50,228,1) 0%, rgba(121,24,242,1) 50%, rgba(72,1,255,1) 100%);
margin:3em;
@media (max-width: 500px) {
    flex-direction:column;
   }
`

export const Info=styled.div`
display:flex;
flex-direction:column;
width:50%;
height:400px;
justify-content:space-around;
align-items:center;
@media (max-width: 500px) {
    align-items:center;    
    width:100%;
}
`

export const Ticket = styled.div`
// height:50%;
// width:100%;

`

export const Image = styled.img`
object-fit:contain;
height:100%;
width:70%;
`
export const Heading = styled.span`
font-size:50px;
font-weight:700;
color:${props=>props.txtCol};
@media (max-width: 500px) {
    font-size:40px;
    width:100%;
   }
`
export const Body = styled.span`
width:70%;
color:${props=>props.txtCol};
`

export const CTA = styled.div`
width:60%;
height:50px;
background: rgb(121,24,242);
background: linear-gradient(93deg, rgba(121,24,242,1) 50%, rgba(72,1,255,1) 100%);
border:3px solid black;
box-shadow:-6px -6px black;
display:flex;
justify-content:center;
align-items:center;
font-size:24px;
font-weight:500;
color:white;
@media (max-width: 500px) {
    font-size:16px;
    width:80%;
   }
`