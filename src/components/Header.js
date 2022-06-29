import React, { useEffect, useState } from "react";
import { FaSearch, FaStickyNote, FaTimes } from "react-icons/fa";
import { useTodoContext } from "../api/DataProvider";
import HeaderStyles from "./styles/HeaderStyles";

const Header = () => {
  return (
    <HeaderStyles>
      <header>
        <h1>
          <FaStickyNote style={{ color: "#ffe900" }} /> My Notes
        </h1>
        <Search />
      </header>
      <section>
        <h2>Capture what's on your mind</h2>
        <p>Add notes and lists to keep</p>
      </section>
    </HeaderStyles>
  );
};

export default Header;

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchTodo } = useTodoContext();

  const onSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    searchTodo(searchTerm);
  }, [searchTerm]);

  return (
    <div className="search-wrapper">
      <div className="input-group">
        <button type="button" className="btn">
          <FaSearch />
        </button>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          autoComplete="false"
          value={searchTerm}
          onChange={onSearchChange}
        />
        <button type="button" className="btn">
          <FaTimes style={{ cursor: "pointer" }} />
        </button>
      </div>
    </div>
  );
}
