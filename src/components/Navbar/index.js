import React, { useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtn, 
    NavBtnLink 
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
        <IconContext.Provider value={{ color: "#fff" }}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>KH</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                              to="about" 
                              smooth={true} 
                              duration={2000} 
                              spy={true} 
                              exact="true" 
                              offset={-80}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                              to="projects" 
                              smooth={true} 
                              duration={2000} 
                              spy={true} 
                              exact="true" 
                              offset={-80}
                            >Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                              to="tech-stack" 
                              smooth={true} 
                              duration={2000} 
                              spy={true} 
                              exact="true" 
                              offset={-80}
                            >Tech Stack</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                              to="blogs" 
                              smooth={true} 
                              duration={2000} 
                              spy={true} 
                              exact="true" 
                              offset={-80}
                            >Blogs</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                              to="resume" 
                              smooth={true} 
                              duration={2000} 
                              spy={true} 
                              exact="true" 
                              offset={-80}
                            >Resume</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/contact">Contact</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;