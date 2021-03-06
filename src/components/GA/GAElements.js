import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const ContentWrap = styled.div`
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

export const AboutTitle = styled.h1`
  text-align: center;
`;

export const AboutTitle2 = styled.h4`
  text-align: center;
`;

export const AboutCard = styled.div`
  display: flex;
  flex-direction: row;
  padding: 32px;
`;

export const AboutImage = styled.img`
  width: 100%;
  margin-right: 32px;
  max-height: 300px;
  border-radius: 20px;
`;

export const ContentP = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutContent = styled.p`
  font-size: 20px;
  margin-left: 50px;
  margin-right: 50px;
  line-height: 1.5;
  margin-bottom: 30px;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

export const PostDate = styled.p`
  font-size: 15px;
`;
