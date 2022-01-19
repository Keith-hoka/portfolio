import React, { useState } from 'react'
import Video from "../../videos/video.mp4";
import ReactTyped from 'react-typed';
import { Button } from '../ButtonElements';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight,
    HomeBtn,
    ScrollDown,
    ChevronDown,
    ScrollText 
} from './HeroElements';
// import Particles from '../Particles';
// import Particles from 'react-tsparticles';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer id="home">
            <HeroBg>
                {/* <Particles /> */}
                <VideoBg autoPlay loop muted src={ Video } type="video/mp4" />
            </HeroBg>
            <HeroContent>
              <HeroH1>Hello! I am Keith HO</HeroH1>
              <HeroP>
                <ReactTyped
                  loop
                  typeSpeed={100}
                  backSpeed={100}
                  strings={["I am a Software Engineer", "I am a Web Developer", "I am a Front-End Developer", "I am a Full Stack Developer", "I am a Digital Developer"]}
                  smartBackspace
                  shuffle={false}
                  backDelay={10}
                  fadeOut={false}
                  fadeOutDelay={100}
                  loopCount={0}
                  showCursor
                  cursorChar="_"
              />
              </HeroP>
                <HeroBtnWrapper>
                    <Button 
                      onMouseEnter={ onHover } 
                      onMouseLeave={ onHover }
                      primary="true"
                      dark="true"
                      smooth={true} 
                      duration={500} 
                      spy={true} 
                      exact="true" 
                      offset={-80}
                    >
                      <HomeBtn to="/contact">
                        Hire Me { hover? <ArrowForward /> : <ArrowRight />}
                      </HomeBtn>
                    </Button>
                </HeroBtnWrapper>
                <ScrollDown 
                  to="about"
                  smooth={true} 
                  duration={2000} 
                  spy={true} 
                  exact="true" 
                  offset={-80}
                >
                    <ChevronDown />
                    <ChevronDown />
                    <ChevronDown />
                    <ScrollText>SCROLL DOWN</ScrollText>
                </ScrollDown>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
