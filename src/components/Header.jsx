import React from "react";
import { SearchBar } from "./SearchBar.jsx";

export const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__container sky-gradient-03">
          <a href="/">
            <h1 className="header__logo">weather</h1>
          </a>
          <SearchBar />
        </div>
      </div>
    </header>
  );
};
