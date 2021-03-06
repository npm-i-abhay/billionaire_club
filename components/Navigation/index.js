import React,{useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion'
import { Router, useRouter } from 'next/router';
import { useTheme } from '@/utils/provider';
import { comp_theme } from '@/utils/variables';

// components imports 
import { HeaderHam} from '../HeaderHam';

// styled components
import { Container, Flex } from '@/styles/globalStyles';
import { Nav, NavHeader, NavList, NavVideos, HamIconCont } from './styles';


// data import 
import { links } from '@/props';

export const Navigation = (
    {
    toggleMenu,
    setToggleMenu,
    hamClick=()=>{}},
    myHam,
    
    
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
    </Container>
  </Nav> }
  </AnimatePresence>
  </>
};
