import styled from "styled-components";

export const BodyWrapper = styled.div`
width:100%;
height:100%;
// border:2px solid orange;
display:flex;
flex-direction:column;
align-items:center;
position:relative;
@media (max-width: 500px) {
width:100vw;
}
`

export const AbsoluteWrapper = styled.div`
height:30%;
width:50%;
position:absolute;
`

export const Pattern=styled.img`
object-fit:contain;
height:100%;
width:100%;
`

// hamburger styles

export const Container = styled.div`
flex-grow: 1;
  // margin: 0 auto;
  // border:3px solid red;
left:0;
padding: 0 12px;
position: relative;
width: 100%;
height: 100%;
background:#7918F2;
  // @media (min-width: 1024px) {
  //   max-width: 100vw;
  // }
  // @media (min-width: 1216px) {
  //   max-width: 1100vw;
  // }
  // @media (min-width: 1408px) {
  //   max-width: 1244px;
  // }
${props =>
    props.fluid &&
    css`
    padding: 0;
    margin: 0;
    background: red;
    max-width: 100% !important;
    `}
`

export const Flex = styled.div`
position: relative;
display: flex;
border:3px solid red;

align-items: center;
${props =>
    props.spaceBetween &&
    css`
    justify-content: space-between;
    `};
${props =>
    props.flexEnd &&
    css`
    justify-content: flex-end;
    `};
${props =>
    props.alignTop &&
    css`
    align-items: flex-start;
    `};
${props =>
    props.noHeight &&
    css`
    height: 0;
    `};
`
export const Header = styled.div`
// border:2px solid blue;
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
position:fixed;
z-index:2;
// margin-bottom:;
backdrop-filter:blur(5px));
// margin-bottom:10px;
`
export const Logo = styled.img`
height:25%;
width:25%;
object-fit:contain;
margin-left:5%;
`