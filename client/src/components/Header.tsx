import React from "react";
import styled from "styled-components";
import plantLogo from "../../public/images/plant.png";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoImg src={plantLogo} alt="Leaf logo" />
      <HeaderTitle>Don't leaf me</HeaderTitle>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  background: #9fdc9f;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  position: absolute;
  width: 95.5%;
  top: 0;
`;

const LogoImg = styled.img`
  width: 52px;
  height: 40px;
`;

const HeaderTitle = styled.h1`
  color: #000;

  font-family: Kadwa;
  font-size: 36px;
  font-weight: 800;
  line-height: normal;
`;

export default Header;
