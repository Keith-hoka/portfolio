import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? "#f9f9f9" : "#BAEAC8")};

  @media screen and (max-width: 768px) {
      padding: 100px 0;
      height: 850px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 500px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
      grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? "#f3f8f5" : "#010606")};

  @media screen and (max-width: 500px) {
      font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ProjectBtn = styled.div`
  margin-right: 30px;
`;

export const PButton = styled.a`
  border-radius: 50px;
  background: ${({primary}) => (primary ? "#01bf71" : "#010606")};
  white-space: nowrap;
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
  text-decoration: none;

  &:hover {
      transition: all 0.2s ease-in-out;
      text-decoration: none;

      background: ${({primary}) => (primary ? "#fff" : "#01bf71")};
  }
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;

  &:hover {
      transform: scale(1.02);
      transition: all 0.5s ease-in-out;
      cursor: pointer;
  }
`;

export const TechStack = styled.p`
  color: ${({lightText}) => (lightText ? "#f3f8f5" : "#010606")};
`;