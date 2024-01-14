import React from "react";
import styled from "styled-components";
import plantLogo from "../../public/images/plant.png";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoImg src={plantLogo} alt="Leaf logo" />
      <HeaderTitle>Don't Leaf Me</HeaderTitle>
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
  width: 100%;
  top: 0;
  left: 0;
`;

const LogoImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const HeaderTitle = styled.h1`
  color: #000;

  font-size: 36px;
  font-weight: 600;
  line-height: normal;
`;

export default Header;
