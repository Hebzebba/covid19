import React from "react";

import "./footerStyle.css";
import { AppBar } from "@material-ui/core";

const Footer = () => {
  return (
    <AppBar position="relative" className="footer">
      <center>
        <h1>
          <p>Copyright || All right reserved</p>
        </h1>
      </center>
    </AppBar>
  );
};

export default Footer;
