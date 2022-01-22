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
        <ContentWrap>
          <AboutTitle>Want to know more about me?</AboutTitle>
          <AboutTitle2>
            I am a Full Stack | Front-end | Web Developer
          </AboutTitle2>
          <AboutCard>
            <Tilt
              className="Tilt"
              options={{ max: 25 }}
              style={{ height: 300, width: 1600 }}
            >
              <AboutImage src={keithImg} />
            </Tilt>
            <ContentP>
              <AboutContent>
                My name is Keith Ka, HO. I am a Sydney based Software
                Engineering student at General Assembly with a background in
                both Mechanical and Electronics Engineering. With multiple years
                of working experience in the electronics industry, I am a
                problem-solver who never gives up and is solution oriented. I am
                looking for a role in hi-tech or electronics companies, where I
                can utilise and combine my previous skills and transition easily
                into a team as their newest Software Engineer.
              </AboutContent>
              <AboutContent>
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
