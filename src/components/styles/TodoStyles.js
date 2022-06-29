import styled from "styled-components";

const TodoStyles = styled.section`
  .row {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    max-width: 985px;
    @media screen and (min-width: 1240px) {
      grid-template-columns: 1fr 1fr;
      padding: 0 10em;
    }
  }

  .wrapper {
    width: 305px;
    margin: 0 auto 1em;
  }

  h4 {
    font-family: "Roboto Slab", sans-serif;
    font-weight: lighter;
    font-size: 48px;
    color: #595959;
  }

  .footer {
    padding: 0px 20px;
    border-top: 2px dotted #8a8a8a54;
    opacity: 0.8;

    span {
      line-height: 40px;
      font-size: 12px;
      color: #8a8a8a;
    }
  }

  .button-wrapper {
    text-align: center;
    padding: 22px;
  }

  .btn {
    background: white;
    padding: 8px;
    width: 30px;
    height: 30px;
    border: none;
    margin: 0.25em;
    color: #968d8d;
    cursor: pointer;
    border-radius: 50%;
  }

  .btn:hover {
    background: #968d8d;
    color: white;
  }

  .btn-warning {
  }
  .btn-danger {
  }

  .note {
    border-top-color: rgba(0, 0, 0, 0.0980392);
    border-top-style: dotted;
    border-top-width: 2px;

    background-color: #ffe900;
    box-shadow: 0 2px 1px rgb(0 0 0 / 8%);
  }
`;

export const TodoItemStyles = styled.div`
   {
    background-color: ${(props) => props.bgColor};
    height: 300px;
    padding: 18px 23px 0;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: height 0.2s cubic-bezier(0.42, 0, 0.56, 1.46),
      padding-top 0.3s cubic-bezier(0.42, 0, 0.56, 1.46) !important;
  }
`;

export default TodoStyles;
