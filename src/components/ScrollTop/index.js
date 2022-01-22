import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaChevronUp } from "react-icons/fa";
import { ScrollUp, IconContainer } from "./ScrollTopElements";

const ScrollTop = () => {
  const [scrollTop, setScrollTop] = useState(false);

  const changeScrollTop = () => {
    if (window.scrollY >= 720) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeScrollTop);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <ScrollUp scrollTop={scrollTop} onClick={toggleHome}>
      <IconContainer>
        <FaChevronUp />
      </IconContainer>
    </ScrollUp>
  );
};

export default ScrollTop;
