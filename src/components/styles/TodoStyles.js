import styled from "styled-components";

const TodoStyles = styled.section`
  padding: 3rem;
  background-color: rgb(240, 242, 243);

  .todo {
    margin: 1em 0;
    padding: 0.5em 1em;
    box-shadow: 0 4px 8px -5px rgba(0, 0, 0, 0.2);
    background-color: white;
    border-radius: 0.25em;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
`;

export default TodoStyles;
