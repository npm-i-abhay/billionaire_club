import styled from "styled-components";

export const Wrapper = styled.div`
padding:10px;
margin-top:5%;
display:flex;
flex-wrap:wrap;
justify-content:space-around;
width:90%;
position:relative;
@media (max-width: 500px) {
    flex-direction:column;
    // border:2px solid red;
    // width:300px;
    flex-wrap:no-wrap;
    align-items:center;
}
`

export const CardWrapper = styled.div`
Width:30%;
height:100%;
border-style: solid;
border-width: 2px;
border-image: linear-gradient(270deg, rgba(237,237,237,.8) 0%, rgba(255,255,255,0) 140%) 1;
// had to separate border properties to use gradient on borders
display:flex;
flex-direction:column;
align-items:center;
background: rgb(237,237,237);
background: radial-gradient(circle, rgba(237,237,237,0.40242034313725494) 0%, rgba(255,255,255,0) 100%);
margin-bottom:50px;
backdrop-filter:blur(3px);

@media (max-width: 500px) {
    width:100%;
}
`

export const AvatarContainer = styled.div`
height: 70px;
width:  70px;
`

export const AvatarImg = styled.img`
object-fit:cover;
width:100%;
height:100%;
border-radius:100px;
`
export const InfoContainer = styled.div`
display:flex;
flex-direction:${props=>props.direction};
width:150px;
justify-content:space-around;
align-items:${props=>props.align};

`
export const Name = styled.span`
color:${props=>props.txtCol};
`
export const Seller = styled.div`
display:flex;
// border:2px solid red;
justify-content:space-between;
padding:10px;
width:90%;
`

export const ImageContainer = styled.div`
width:90%;
height:80%;
padding:10px;
`

export const Image = styled.img`
object-fit:contain;
height:100%;
width:100%;
`
export const BidTime = styled.span`
color:${props=>props.txtCol};
`

export const ValueTime = styled .span`
color:${props=>props.txtCol};
font-size:24px;
font-weight:500;
@media (max-width: 500px) {
font-size:18px;
}
`
export const AbsoluteWrapper = styled.div`
height:100%;
width:100%;
position:absolute;
z-index:${props=>props.zIndex};
top:${props=>props.top};
left:${props=>props.left};
`

export const Pattern=styled.img`
object-fit:contain;
height:100%;
width:100%;
`
