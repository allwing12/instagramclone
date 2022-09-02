import React from "react";
import "../styles/Navigation.scss";
// import logo from "../instagramLogo.png";
// import searchIcon from "./searchIcon.png";
import Menu from "./Menu.jsx";

function Navigation() {
  return (
    <div className="Navigation">
      <div className="container">
        <img
          className="Logo"
          src="Images/instagramLogo.png"
          alt="instagramLogo"
        />
        <div className="search">
          <img
            className="searchIcon"
            src="Images/searchIcon.png"
            alt="searchIcon"
          />
          <span className="searchText">search</span>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default Navigation;
