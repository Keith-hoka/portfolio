import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProjectsContainer = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #BAEAC8;

  @media screen and (max-width: 768px) {
      height: 1600px;
  }

  @media screen and (max-width: 500px) {
      height: 1600px;
  }
`;

export const ProjectsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
  }
  
  @media screen and (max-width: 500px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
  }
`;

export const ProjectsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
      transform: scale(1.02);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
  }
`;

export const ProjectsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 500px) {
      font-size: 2rem;
  }
`;

export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  height: 30px;
  text-align: center;
`;

export const ProjectsP = styled.p`
  font-size: 1rem;
  text-align: center;
  height: 50px;
`;

export const BtnWrapper = styled.div`
  margin-top: -50px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectsButton = styled(Link)`
  margin-top: 100px;
  border-radius: 50px;
  background: ${({primary}) => (primary ? "#01bf71" : "#010606")};
  white-space: nowrap;
  text-decoration: none;
  padding: ${({big}) => (big ? "14px 48px" : "12px 30px")};
  color: ${({dark}) => (dark ? "#010606" : "#fff")};
  font-size: ${({fontBig}) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
      transition: all 0.2s ease-in-out;
      background: ${({primary}) => (primary ? "#010606" : "#fff")};
      color: ${({dark}) => (dark ? "#fff" : "#010606")};
  }
`;
