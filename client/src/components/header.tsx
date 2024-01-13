import React from "react";
import styled from "styled-components";
import plantLogo from "../../public/images/plant.png";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoImg src={plantLogo} alt="Leaf logo" />
      header component
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  background: #9fdc9f;
  height: 18px;
`;

const LogoImg = styled.img`
  width: 13px;
  height: 10px;
`;

export default Header;
