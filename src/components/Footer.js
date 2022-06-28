import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  padding: 3em;
  background-color: #f5f5f5;
`;

const Footer = () => {
  return (
    <FooterStyles>
      <h2>Footer</h2>
    </FooterStyles>
  );
};

export default Footer;
