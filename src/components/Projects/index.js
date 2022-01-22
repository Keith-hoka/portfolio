import React, { useEffect, useState } from "react";
import Icon1 from "../../images/tictactoe.svg";
import Icon2 from "../../images/foodshopping.svg";
import Icon3 from "../../images/amazon.svg";
import Icon4 from "../../images/travellingblog.svg";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
  BtnWrapper,
  ProjectsButton,
} from "./ProjectsElements";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>My Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard
          href="//keith-hoka.github.io/project0"
          target="_blank"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
        >
          <ProjectsIcon src={Icon1} />
          <ProjectsH2>Tic Tac Toe</ProjectsH2>
          <ProjectsP>This is a classic game.</ProjectsP>
        </ProjectsCard>
        <ProjectsCard
          href="//foodshoppingapp.herokuapp.com/"
          target="_blank"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
        >
          <ProjectsIcon src={Icon2} />
          <ProjectsH2>Food shopping website</ProjectsH2>
          <ProjectsP>A food shopping website.</ProjectsP>
        </ProjectsCard>
        <ProjectsCard
          href="//fir-a4ab6.web.app/"
          target="_blank"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
        >
          <ProjectsIcon src={Icon3} />
          <ProjectsH2>GAmazon </ProjectsH2>
          <ProjectsP>An e-commerce website inspired by Amazon.</ProjectsP>
        </ProjectsCard>
        <ProjectsCard
          href="//travel-blog-ga.netlify.app/"
          target="_blank"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
        >
          <ProjectsIcon src={Icon4} />
          <ProjectsH2>Travel Blog </ProjectsH2>
          <ProjectsP>
            It is platform that everyone can share their travel experience.
          </ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
      <BtnWrapper>
        <ProjectsButton
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary="true"
          dark="true"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
          to="/projects-details"
        >
          Explore More
        </ProjectsButton>
      </BtnWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
