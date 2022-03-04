import React,{useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion'
import { Router, useRouter } from 'next/router';
import { useTheme } from '@/utils/provider';
import { comp_theme } from '@/utils/variables';

import { HeaderHam} from '../HeaderHam';

// styled components
import { Container, Flex } from '@/styles/globalStyles';
import { Nav, NavHeader, NavList, NavVideos, HamIconCont } from './styles';

export const Navigation = (
    {
    toggleMenu,
    setToggleMenu,
    hamClick=()=>{}},
    myHam,
    links =[
        {
            id:0,
            title:"Home",
            link:'/'
        },
        {
            id:4,
            title:"Features",
            link:'/Features'
        },
        {
            id:1,
            title:"Roadmap",
            link:'/Roadmap'
        },
        {
            id:2,
            title:"Team",
            link:'/Team'
        },
        {
            id:2,
            title:"Join Discord",
            link:'/Join'
        },
    ]
    
    ) => {
    const r =useRouter()
    const [reveal,setReveal] = useState({
        show:false,
        video:"",
        key:0
    })
    const {theme, setTheme} = useTheme()

  return <>
    <AnimatePresence>
    {toggleMenu && 
    <Nav
        initial={{x:"-100%"}}
        exit={{x:"-100%"}}
        animate={{x:toggleMenu?0:100}}
        transition={{duration:.8,ease:[.6,.05,-.01,.9]}}
        listBG={comp_theme[theme].txt}
        >
    <Container>
        <NavHeader>
                <HeaderHam
                    ham={myHam}
                    onHamClick={hamClick}/>       
        </NavHeader>
        <NavList  linkCol={comp_theme[theme].txt}>
            <ul>
                {links.map((o,i)=> (<motion.li
                                        key={i}
                                        >
                    <motion.div 
                        className='link'
                        initial={{x:0}}
                        whileHover={{x:40}}

                        >
                    <div>
                        {o.title}
                    </div>
                    </motion.div>
                </motion.li>))}
                
            </ul>
        </NavList>
        <NavVideos  
            revealBG={comp_theme[theme].menu}>
            <motion.div 
            className='reveal'
            animate={{width:reveal.show ? 0 :"100%"}}>
            </motion.div>
        </NavVideos>
    </Container>
  </Nav> }
  </AnimatePresence>
  </>
};
