import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProjectsDetails from "../components/ProjectsDetails";
import {
  projectObjOne,
  projectObjThree,
  projectObjTwo,
  projectObjFour,
} from "../components/ProjectsDetails/Data";
import ScrollToTop from "../components/ScrollToTop";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const ProjectsDetailsPage = () => {
  return (
    <>
      <ScrollToTop />
      <Icon to="/">
        KH
        <GobackArrow>
          <BsFillArrowLeftCircleFill />
        </GobackArrow>
      </Icon>
      <ProjectsDetails {...projectObjOne} />
      <ProjectsDetails {...projectObjTwo} />
      <ProjectsDetails {...projectObjThree} />
      <ProjectsDetails {...projectObjFour} />
    </>
  );
};

export default ProjectsDetailsPage;

const Icon = styled(Link)`
  margin-left: 32px;
  text-decoration: none;
  color: #01bf71;
  font-weight: 700;
  font-size: 50px;
  font-family: "Licorice", cursive;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 150px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }

  &:hover {
    color: #010606;
    transition: 0.5s ease-out;
  }
`;

const GobackArrow = styled.div`
  font-size: 30px;
  margin-top: 20px;
`;
