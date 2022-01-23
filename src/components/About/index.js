import React, { useState } from "react";
import Tilt from "react-tilt";
import {
  Container,
  ContentWrap,
  Icon,
  GobackArrow,
  AboutCard,
  AboutTitle,
  AboutTitle2,
  AboutImage,
  ContentP,
  AboutContent,
  BtnWrapper,
  HireButton,
} from "./AboutElements";
import keithImg from "../../images/keith.jpg";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.6,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

const item2 = {
  hidden: { opacity: 0, x: -150 },
  visible: { opacity: 1, x: 0 },
};

const scroll = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const About = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <Container>
        <Icon to="/">
          KH
          <GobackArrow>
            <BsFillArrowLeftCircleFill />
          </GobackArrow>
        </Icon>
        <ContentWrap initial="hidden" animate="visible" variants={container}>
          <AboutTitle variants={item}>
            Keith, a normal person who doesn't want to be normal
          </AboutTitle>
          <AboutTitle2 variants={item}>
            I am a Full Stack | Front-end | Web Developer
          </AboutTitle2>
          <AboutCard>
            <Tilt
              className="Tilt"
              options={{ max: 25 }}
              style={{ height: 300, width: 1600 }}
            >
              <AboutImage src={keithImg} variants={scroll} />
            </Tilt>
            <ContentP>
              <AboutContent variants={item2}>
                My name is Keith Ka, HO. I am a Sydney based Software
                Engineering student at General Assembly with a background in
                both Mechanical and Electronics Engineering. With multiple years
                of working experience in the electronics industry, I am a
                problem-solver who never gives up and is solution oriented. I am
                looking for a role in hi-tech or electronics companies, where I
                can utilise and combine my previous skills and transition easily
                into a team as their newest Software Engineer.
              </AboutContent>
              <AboutContent variants={item2}>
                I am confident with JavaScript, ReactJS / NextJS, React Native
                and Ruby on Rails. I also have experience in NodeJS / Express
                JS, MongoDB, Firebase ect. Keeping learning is my daily goal!
                Let's work together!
              </AboutContent>
            </ContentP>
          </AboutCard>
        </ContentWrap>
        <BtnWrapper>
          <HireButton
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            to="/contact"
          >
            Work with Me
          </HireButton>
        </BtnWrapper>
      </Container>
    </>
  );
};

export default About;
