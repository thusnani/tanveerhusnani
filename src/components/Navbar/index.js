import React, { useState, useEffect } from 'react';
import logo from '../../images/tanveer_husnani_logo.png';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, ImageLogo } from './NavbarElements';


const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () =>{
        scroll.scrollToTop()
    }


    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>
                            <ImageLogo src={logo} alt="logo" />
                    </NavLogo>
                        <MobileIcon >
                            <FaBars onClick={toggle}/>
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks 
                                    to='aboutme'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >About Me</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to='skills'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >Skills</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to='mywork'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >My Work</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to='contact'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >Contact</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
