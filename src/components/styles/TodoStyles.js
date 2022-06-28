import styled from "styled-components";

const TodoStyles = styled.section`
  padding: 0.5em 5em;

  .row {
    margin: 0 auto;
    padding: 0 10em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5em;
    max-width: 1000px;
  }
  .todo {
    background-color: #ffe900;
    height: 300px;
    padding: 18px 30px 0 14px;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.08);
    border-radius: 0.25em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: height 0.2s cubic-bezier(0.42, 0, 0.56, 1.46),
      padding-top 0.3s cubic-bezier(0.42, 0, 0.56, 1.46) !important;
  }

  h4 {
    font-family: "Roboto Slab", sans-serif;
    font-weight: lighter;
    font-size: 48px;
    color: #595959;
  }

  .footer {
  }
  .btn {
    padding: 8px 12px;
    border: none;
    margin: 0.25em;
    color: white;
  }

  .btn-warning {
    background-color: rgb(103, 150, 163);
  }
  .btn-danger {
    background-color: rgb(230, 10, 20);
  }

  .note {
    border-top-color: rgba(0, 0, 0, 0.0980392);
    border-top-style: dotted;
    border-top-width: 2px;

    background-color: #ffe900;
    box-shadow: 0 2px 1px rgb(0 0 0 / 8%);
  }
`;

export default TodoStyles;
