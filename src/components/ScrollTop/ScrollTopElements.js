import styled from "styled-components";

export const ScrollUp = styled.div`
  display: ${({ scrollTop }) => (scrollTop ? "flex" : "none")};
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: #01bf71;
  color: #fff;
  z-index: 99;
  align-items: center;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

export const IconContainer = styled.div`
  margin-left: 8px;
  display: block;
  font-size: 25px;
  color: #fff;
  animation: scrollTop 0.52s ease alternate infinite;

  @keyframes scrollTop {
    from {
      transform: translateY(5px);
    }
    to {
      transform: translateY(-3px);
    }
  }
`;
