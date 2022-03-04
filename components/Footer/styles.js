import styled from 'styled-components'


export const FooterWrapper = styled.div`
width:85%;
height:100%;
display:flex;
justify-content:space-between;
align-items:center;
padding:10px;
border-top:1px solid #A7A7A7;
flex-wrap:wrap;
@media (max-width: 500px) {
    flex-direction:column;
    width:100%;
}
`

export const LinksRow = styled.div`
width:50%;
display:flex;
justify-content:space-around;
align-items:center;
@media (max-width: 500px) {
    width:100%;
   }
`
export const IconsRow = styled.div`
display:flex;
justify-content:center;
align-items:center;
@media (max-width: 500px) {
justify-content:space-around;
    width:100%;
}
`

export const Links = styled.span`
color:${props=>props.txtCol};
`

export const Logo = styled.img`
height:15%;
width:15%;
object-fit:contain;
@media (max-width: 500px) {
    
    width:40%;
}
`