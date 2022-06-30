import styled from "styled-components";

const FormStyles = styled.section`
  text-align: center;

  .form-wrapper {
    text-align: center;
    background-color: white;
    border-radius: 0.5rem;
    border: 1px solid #f1f1f1;
    padding: 0 0.5rem 0 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: lighter;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-bottom: 3em;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #ffea00 inset !important;
    -webkit-text-fill-color: black;
    border: none;
  }

  input {
    background: inherit;
    font-size: 16px;
    padding: 14px 10px;
    border: none;
    outline: none;
    width: 500px;
    transition: width 0.3s ease;
  }
`;

export default FormStyles;
