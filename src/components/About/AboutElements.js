import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Container = styled.div`
  min-height: 692px;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #baeac8;
  /* background: linear-gradient(108deg, rgba(1, 147, 86, 1) 0%, rgba(10, 201, 122, 1) 100%); */
`;

export const ContentWrap = styled(motion.div)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
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

export const GobackArrow = styled.div`
  font-size: 30px;
  margin-top: 20px;
`;

export const AboutTitle = styled(motion.h1)`
  text-align: center;
`;

export const AboutTitle2 = styled(motion.h4)`
  text-align: center;
`;

export const AboutCard = styled.div`
  display: flex;
  flex-direction: row;
  padding: 32px;
`;

export const AboutImage = styled(motion.img)`
  width: 100%;
  margin-right: 32px;
  max-height: 300px;
  border-radius: 20px;
`;

export const ContentP = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutContent = styled(motion.p)`
  font-size: 25px;
  margin-left: 50px;
  margin-right: 50px;
  line-height: 1.5;
  margin-bottom: 30px;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

export const BtnWrapper = styled.div`
  margin-top: -50px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HireButton = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01bf71" : "#fff")};
  white-space: nowrap;
  text-decoration: none;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#010606" : "#fff")};
    color: ${({ dark }) => (dark ? "#fff" : "#010606")};
  }
`;
