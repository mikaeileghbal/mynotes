import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import MenuStyles from "./styles/MenuStyles";
import { Footer } from "../components";

const menuItems = ["Mote 1", "Note 2", "Note 3", "Note 4"];
const MainMenu = () => {
  const [active, setActive] = useState(0);

  const onClick = (event) => {
    setActive(event.target.key);
  };

  return (
    <MenuStyles>
      {menuItems.map((item) => (
        <button
          key={item}
          className={active === item ? "menu-item active" : "menu-item"}
        >
          <FaArrowCircleRight
            style={{ marginRight: "2.25rem", color: "#ffea00" }}
          />
          {item}
        </button>
      ))}
    </MenuStyles>
  );
};

export default MainMenu;
