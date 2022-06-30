import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import MenuStyles from "./styles/MenuStyles";
import { Footer } from "../components";

const menuItems = [
  { text: "Menu 1", id: 1 },
  { text: "Menu 2", id: 2 },
  { text: "Menu 3", id: 3 },
  { text: "Menu 4", id: 4 },
];

const MainMenu = () => {
  const [active, setActive] = useState(1);

  const onClick = (id) => {
    console.log(id);
    setActive(id);
  };

  return (
    <MenuStyles>
      {menuItems.map((item) => (
        <button
          key={item.id}
          className={active === item.id ? "menu-item active" : "menu-item"}
          onClick={() => onClick(item.id)}
        >
          <FaArrowCircleRight
            style={{
              marginRight: "2.25rem",
              color: "#595959",
              fontSize: "18px",
            }}
          />
          {item.text}
        </button>
      ))}
    </MenuStyles>
  );
};

export default MainMenu;
