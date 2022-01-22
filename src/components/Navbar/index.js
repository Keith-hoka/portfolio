import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav
          scrollNav={scrollNav}
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome} variants={item}>
              KH
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem variants={item}>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={2000}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem variants={item}>
                <NavLinks
                  to="projects"
                  smooth={true}
                  duration={2000}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Projects
                </NavLinks>
              </NavItem>
              <NavItem variants={item}>
                <NavLinks
                  to="tech-stack"
                  smooth={true}
                  duration={2000}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Tech Stack
                </NavLinks>
              </NavItem>
              <NavItem variants={item}>
                <NavLinks
                  to="blogs"
                  smooth={true}
                  duration={2000}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Blog
                </NavLinks>
              </NavItem>
              <NavItem variants={item}>
                <NavLinks
                  to="resume"
                  smooth={true}
                  duration={2000}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Resume
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn variants={item}>
              <NavBtnLink to="/contact">Contact</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
