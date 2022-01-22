import styled from "styled-components";

export const TechStackContainer = styled.div`
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin: 0 auto;

  @media screen and (max-width: 1068px) {
    height: 800px;
  }

  @media screen and (max-width: 988px) {
    height: 800px;
  }

  @media screen and (max-width: 816px) {
    height: 1100px;
  }

  @media screen and (max-width: 565px) {
    height: 1400px;
  }
`;

export const TechStackWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1068px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  @media screen and (max-width: 988px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  @media screen and (max-width: 816px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media screen and (max-width: 565px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 20px;
  }
`;

export const TechStackCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 200px;
  max-width: 120px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const TechStackIcon = styled.img`
  height: 50px;
  width: 50px;
  margin-bottom: 10px;
`;

export const TechStackH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-bottom: 64px;

  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const TechStackH2 = styled.h2`
  font-size: 0.8rem;
  margin-bottom: 10px;
  height: 20px;
  text-align: center;
`;
