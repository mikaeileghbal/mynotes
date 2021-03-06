import styled from "styled-components";

const HeaderStyles = styled.div`
  header {
    z-index: 10;
    background-color: white;
    padding: 0.5rem 0.5rem;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    position: fixed;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;

    @media screen and (min-width: 768px) {
      grid-template-columns: 150px 1fr 150px;
      padding: 0.6rem 2rem;
    }
  }

  section {
    text-align: center;
    padding-top: 5em;

    @media sceen and (min-width: 768px) {
      padding-top: 3em;
    }
  }

  h1 {
    font-family: "Open Sans", sans-serif;
    color: #8a8a8a;
    font-size: 24px;
    font-weight: normal;
    margin-top: -0.3rem;
    display: flex;
    align-items: center;
  }

  h2 {
    font-family: "Open Sans", sans-serif;
    color: #8a8a8a;
    font-size: 26px;
    font-weight: 300;
    padding: 45px 0 22px;

    @media screen and (min-width: 768px) {
      font-size: 36px;
    }
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

  .search-wrapper {
    text-align: center;
    background-color: white;
  }

  .input-group {
    background-color: #f1f1f1;
    border-radius: 0.5rem;
    padding: 0 0.5rem 0 1rem;
    display: inline-flex;
    align-items: center;
    font-weight: lighter;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #f1f1f1 inset !important;
    -webkit-text-fill-color: black;
    border: none;
  }

  input {
    background: inherit;
    font-size: 16px;
    padding: 14px 10px;
    border: none;
    outline: none;
    width: 250px;
    transition: width 0.3s ease;

    @media screen and (min-width: 920px) {
      width: 600px;
    }
  }

  input:focus {
  }
`;

export default HeaderStyles;
