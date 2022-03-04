import styled from "styled-components";


export const Wrapper = styled.div`
display:flex;
flex-wrap:wrap;
flex-direction:column;
width:85%;
// border:2px solid green;
flex-wrap:wrap;
padding:3em;
@media (max-width: 500px) {
    justify-content:center;
    width:100%;
}
`

export const Heading = styled.span`
// border:2px solid red;
width:50%;
font-size:50px;
font-weight:700;
background:linear-gradient(93deg, rgba(172,50,228,1) 8%, rgba(121,24,242,1) 12%, rgba(72,1,255,1) 50%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
@media (max-width: 500px) {
 font-size:40px;
 width:100%;
}

`
export const Body = styled.div`
color:${props=>props.txtCol};
width:70%;
@media (max-width: 500px) {
    width:100%;
}
`
