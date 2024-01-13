import React from "react";
import styled from "styled-components";


const Footer: React.FC = () => {
    return (
        <FooterContainer>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    width: 350px;
    height: 50px;
    background-color: #9FDC9F;
    padding: 3rem 0;
    text-align: center;
    margin-top: 3rem;
`;

export default Footer