import styled from "styled-components";

const HeaderStyles = styled.div`
  header {
    background-color: white;
    color: #8a8a8a;
    padding: 1rem;
    box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.13);
    font-size: 24px;
    position: fixed;
    width: 100%;
  }

  section {
    text-align: center;
    padding-top: 3em;
  }

  h2 {
    font-family: "Open Sans", sans-serif;
    color: #8a8a8a;
    font-size: 36px;
    font-weight: 300;
    padding: 45px 0 22px;
  }

  p {
    font-family: "Roboto", sans-serif;
    color: #595959;
    font-size: 16px;
    font-weight: 400;
    margin: 0 0 10px;
    padding: 0 0 25px;
    -webkit-font-smoothing: antialiased;
  }
`;

export default HeaderStyles;
