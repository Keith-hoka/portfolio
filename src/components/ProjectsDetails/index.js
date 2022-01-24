import React, { useEffect } from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ProjectBtn,
  PButton,
  Column2,
  Img,
  ImgWrap,
  TechStack,
} from "./ProjectsDetailsElements";
import Aos from "aos";
import "aos/dist/aos.css";

const ProjectsDetails = ({
  lightBg,
  to,
  to2,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  buttonLabel2,
  img,
  alt,
  primary,
  dark,
  dark2,
  techStack,
}) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <InfoContainer
        data-aos="zoom-in-down"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        lightBg={lightBg}
      >
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <ProjectBtn>
                    <PButton
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-20}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                      target="_blank"
                      href={to}
                    >
                      {buttonLabel}
                    </PButton>
                  </ProjectBtn>
                  <ProjectBtn>
                    <PButton
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-20}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                      target="_blank"
                      href={to2}
                    >
                      {buttonLabel2}
                    </PButton>
                  </ProjectBtn>
                </BtnWrap>
              </TextWrapper>
              <TechStack>{techStack}</TechStack>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default ProjectsDetails;
