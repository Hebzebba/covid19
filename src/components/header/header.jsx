import React from "react";

import "./headerstyle.css";
import { Card, AppBar } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="relative" className="header">
      <center>
        <h1>
          <span className="span1">Co</span>
          <span className="span2">vid</span>
          <span className="span3">-19</span>
        </h1>
      </center>
    </AppBar>
  );
};

export default Header;
