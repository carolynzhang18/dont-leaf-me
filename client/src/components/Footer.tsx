import React from "react";
import styled from "styled-components";


const Footer: React.FC = () => {
    return (
        <FooterContainer>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
  background: #9fdc9f;
  height: 72px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding-left: 30px;`
;

export default Footer;