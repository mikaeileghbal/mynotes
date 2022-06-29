import styled from "styled-components";

const MenuStyles = styled.div`
  position: fixed;
  width: 280px;
  height: 100%;
  top: 4em;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;

  .menu-item {
    font-family: "Open Sans", sans-serif;
    background: white;
    padding: 14px 30px;
    text-align: left;
    border: none;
    border-radius: 0 25px 25px 0;
    line-height: 1.25rem;
    font-weight: 500;
    font-size: 0.9rem;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
      background: silver;
    }
  }
`;

export default MenuStyles;
