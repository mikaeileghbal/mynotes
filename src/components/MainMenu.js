import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import MenuStyles from "./styles/MenuStyles";

const menuItems = ["Mote 1", "Note 2", "Note 3", "Note 4"];
const MainMenu = () => {
  return (
    <MenuStyles>
      {menuItems.map((item) => (
        <button className="menu-item" key={item}>
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
