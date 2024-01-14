import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import fireLogo from "../../public/images/fire.svg";
import timerLogo from "../../public/images/timer.svg";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Link to="/">
        <LogoImg src={fireLogo} alt="Home" />
      </Link>
      <Link to="/timer">
        <LogoImg src={timerLogo} alt="Timer" />
      </Link>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background: #9fdc9f;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 45px;
`;

const LogoImg = styled.img`
  width: 48px;
  height: 48px;

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export default Footer;
