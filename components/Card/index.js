import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import { useState, useEffect } from 'react'
// custom provider built for changing themes
import { useTheme } from '@/utils/provider'
import { comp_theme } from '@/utils/variables'

// styled components imports
import { 
  Wrapper,
  CardWrapper,
  Seller,
  InfoContainer,
  AvatarContainer,
  AvatarImg,
  Name,
  ImageContainer,
  Image,
  BidTime,
  ValueTime,
  AbsoluteWrapper,
  Pattern

} from './styles'

// Data import 
import { NFTdata } from '@/props' //map data to be used for cards 


export const Card = () => {


  const {theme}= useTheme()
  const themer = comp_theme[theme]

  const [sWidth, setSwidth] = useState(0)
  
  useEffect(()=>{
    setSwidth(window.innerWidth)
  window.onresize=()=>{setSwidth(window.innerWidth)}
  // detecting when the screen resizes
  },[sWidth])


  return (
    <>
    {/* The cards are being mapped since in on he actual platform this data would be Received from an api and hence it's need to be dynamic and being able to accommodate any number of indexes within the received data  */}

    <Wrapper>

    
      {NFTdata.map((o,i)=>(
        <CardWrapper key={i} >
         {/* Seller information */}
        <Seller>
          <InfoContainer align='center' >
            <AvatarContainer>
              <AvatarImg src={o.sellerImage} />
            </AvatarContainer>
            <Name txtCol={themer.txt}>
                {o.sellerName}
            </Name>
          </InfoContainer>
  
          <InfoContainer align='center'>
            <AiFillStar color='#007AFF' size={34} />
            <Name txtCol={themer.txt}>
                {o.sellerNumberRatings}
            </Name>
          </InfoContainer>
        </Seller>
        
         {/* NFT Image Tile */}
          <ImageContainer>
            <Image alt='' src={o.imgSource} />
          </ImageContainer>
  
         {/* Pricing, biding and time information */}
        <Seller>
          <InfoContainer direction='column'>
            <BidTime txtCol={themer.accentTxt} > Current Bid </BidTime>
            <ValueTime txtCol={themer.txt} > {o.tokenPrice} </ValueTime>
          </InfoContainer>
  
          <InfoContainer 
            align='flex-end'
            direction='column'>
            <BidTime BidTime txtCol={themer.accentTxt} > Ending In </BidTime>
            <ValueTime txtCol={themer.txt} > {o.timeRemaining} </ValueTime>
          </InfoContainer>
        </Seller>
      </CardWrapper>
      ))}

    {sWidth >=600 && <> 
    
      <AbsoluteWrapper
        zIndex='-1'
        top='50%'
        left='-50%'>
          <Pattern src='/shapes/dots.png' />
        </AbsoluteWrapper>
      <AbsoluteWrapper
        zIndex='-1'
        top='-20%'
        left='30%'
        >
          <Pattern src='/shapes/dots.png' />
        </AbsoluteWrapper>
      <AbsoluteWrapper
        zIndex='-2'
        left='50%'
        top='30%'
        >
          <Pattern src='/shapes/circle.png' />
        </AbsoluteWrapper>
    </>} 

    </Wrapper>
    </>
  )
}
