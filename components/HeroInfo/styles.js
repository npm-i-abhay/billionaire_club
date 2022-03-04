import styled from "styled-components";

export const InfoWrapper = styled.div`
height:450px;
width:100%;
display:flex;
flex-direction:column;
position:relative;
justify-content:space-around;
align-items:flex-start;
flex-wrap:wrap;
@media (max-width: 500px) {
    align-items:center;
    flex-wrap:no-wrap;

}
`
export const MainHead = styled.span`
font-size:70px;
font-weight:700;
color:${props=>props.txtCol};
@media (max-width: 500px) {
    font-size:40px;
}
`
export const GraphicCont = styled.img`
width:70px;
height:70px;
object-fit:contain;
// border:1px solid orange;
margin-top:-30px;
margin-left:-10px;
// position:absolute;
`

export const MainHeadContainer= styled.div`
display:flex;
justify-content:flex-start;
@media (max-width: 500px) {
    justify-content:center;

}
`
export const SubHeadContainer = styled.div`
width:80%;
display:flex;
justify-content:flex-end;
@media (max-width: 500px) {
    justify-content:center;
    width:100%;

}


`
export const SubHead = styled.span`
font-size:50px;
font-weight:700;
background: -webkit-linear-gradient(360deg, rgba(0,219,222,1) 1%, rgba(118,116,237,1) 50%, rgba(252,0,255,1) 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
@media (max-width: 500px) {
    font-size:30px;
}
`

export const Row = styled.div`
width:100%;
display:flex;
flex-direction:column;
// border:2px solid orange;
`
export const Body = styled.div`
width:80%;
color:${props=>props.txtCol};
text-align:right;
@media (max-width: 500px) {
    text-align:center;
    width:100%;

}
`
export const InputContainer = styled.div`
width:80%;
display:flex;
align-items:center;
justify-content:flex-end;
padding-top:20px;
// border:2px solid red;
@media (max-width: 500px) {
    justify-content:center;
    width:90%;

}
`

export const Email = styled.input`
margin:5px;
background:none;
border:2px solid #8D31FF;
width:250px;
height:50px;
text-align:center;
color:${props=>props.txtCol};
`