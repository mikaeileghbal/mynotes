import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  padding: 1rem 2rem;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;

  h5 {
    font-weight: 200;
    color: #8a8a8a;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 600px) {
      flex-direction: row;
    }

    li {
      display: inline-block;
      margin: 0 0.8rem;
      color: #8a8afa;
      user-select: none;
    }

    li + li {
      margin-top: 0.5em;
      @media screen and (min-width: 580px) {
        margin-top: 0;
      }
    }
  }

  a {
    text-decoration: none;
    color: #8a8a8a;

    &:hover {
      border-bottom: 1px solid #8a8a8a;
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyles>
      <h5>
        @2022 <a href="https://mikaeileghbal.github.io">Mikaeil Eghbal</a>
      </h5>
      <ul>
        <li>React.js</li>
        <li>Styled Components</li>
        <li>React Context</li>
        <li>Webpack</li>
      </ul>
    </FooterStyles>
  );
};

export default Footer;
