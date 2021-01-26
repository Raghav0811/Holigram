import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import NavLinks from "./NavLinks";

import "./MainNavigation.css";

const MainNavigation = (props) => {
  return (
    <Header>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">Your Holidays</Link>
      </h1>
      <nav>
        <NavLinks />
      </nav>
    </Header>
  );
};

export default MainNavigation;
