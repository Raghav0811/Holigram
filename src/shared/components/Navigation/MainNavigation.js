import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";

import "./MainNavigation.css";

const MainNavigation = (props) => {
  return (
    <React.Fragment>
      <SideDrawer>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <Header>
        <button className="main-navigation__menu-btn">
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your Holidays</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </Header>
    </React.Fragment>
  );
};

export default MainNavigation;
