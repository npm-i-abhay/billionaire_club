import styled from 'styled-components'


export const NavWrapper = styled.div`
width:100%;
height:100%;
// border:2px solid red;
display:flex;
justify-content:space-around;
align-items:center;
padding:10px;
background-color:${props=>props.bgCol};
flex-wrap:wrap;
`

export const LinksRow = styled.div`
width:50%;
display:flex;
justify-content:space-around;
align-items:center;
`

export const Links = styled.span`
color:${props=>props.txtCol};
cursor:pointer;
`

export const Logo = styled.img`
height:15%;
width:15%;
object-fit:contain;
`
export const Icon = styled.div`
display:${props=>props.display};
`
export const LinkContainer= styled.div`
display:flex;
flex-direction:column;
align-items:center;
transition:all 1s;
`