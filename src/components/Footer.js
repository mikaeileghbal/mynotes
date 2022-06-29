import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  padding: 1rem 2rem;
  background-color: #f5f5f5;
  font-size: 0.5rem;
  color: #8a8a8a;
`;

const Footer = () => {
  return (
    <FooterStyles>
      <h2>Footer</h2>
    </FooterStyles>
  );
};

export default Footer;
