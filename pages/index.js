import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect,useState } from 'react'

// styled component imports
import { 
  BodyWrapper ,
  Header,
  Logo
} from '@/styles/globalStyles'


// components import 
import { NavigationDesktop } from '../components/NavigationDesktop'
import { Card } from '../components/Card'
import { HeroContainer } from '@/components/HeroContainer'
import { HeadingBody } from '@/components/HeadingBody'
import { Banner } from '@/components/Banner'
import { Newsletter } from '@/components/Newsletter'
import { Footer } from '@/components/Footer'
import { HeaderHam } from '@/components/HeaderHam'
import { Navigation } from '@/components/Navigation'

export default function Home() {

  // states to toggle hamburger menu
  const [toggle,setToggle] = useState(false)
  const [hammer, setHammer]= useState(false)

  const [sWidth, setSwidth] = useState(0)
  // useEffect detecting screen size to manage responsiveness and generate components dynamically
    useEffect(()=>{
      
      setSwidth(window.innerWidth)
      window.onresize=()=>{setSwidth(window.innerWidth)}
      console.log(sWidth)
      window.onload=()=>{setSwidth(window.innerWidth)}
        // detecting when the screen resizes
  },[ sWidth])
  

  return (
  <>  
  {sWidth >=600 ? 
    <NavigationDesktop/>:
    <>
    
    <Header>
      <Logo src='/graphics/logo.png' />
    <HeaderHam onHamClick={()=>{ 
      setHammer(!hammer)
      setToggle(!toggle)
      }}/>
    </Header>


    <Navigation 
    toggleMenu={toggle}  
    setToggleMenu={setToggle}
    myHam = {hammer}
    hamClick={()=>
                {
                setHammer(!hammer)
                setToggle(!toggle)
                }}
    />
      </>
}
    <BodyWrapper>
      <HeroContainer/>
      <HeadingBody/>
      <Card/>
      <Banner/>
      <Newsletter/>
      <Footer/>
    </BodyWrapper>
  
  </> 

    
  )
}
