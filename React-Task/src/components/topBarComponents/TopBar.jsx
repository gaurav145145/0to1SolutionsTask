import React from "react";
import TopBarLinks from "./TopBarLinks";
import TopBarHeader from "./TopBarHeader";
const TopBar = () => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <TopBarHeader />
        <TopBarLinks />
      </div>
    </nav>
  );
};

export default TopBar;
