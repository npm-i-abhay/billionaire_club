import React,{useEffect,useState} from 'react'

// styled components imports
import { 
    ImageWrapper,
    HeroImg,
    ShapeImg, 
    Circle } from './styles'

export const HeroImage = () => {

const [sWidth, setSwidth] = useState(0)
  
// useEffect detecting screen size to manage responsiveness and generate components dynamically
useEffect(()=>{
  setSwidth(window.innerWidth)
window.onresize=()=>{setSwidth(window.innerWidth)}
},[sWidth])

  return (
    <ImageWrapper>
        <HeroImg src='/apes/bigApe.png'/>
        {sWidth>600 && <>
          <ShapeImg src='/shapes/circleArrow.png'  /> 
          <Circle/>
        </> }
        
    </ImageWrapper>
  )
}
