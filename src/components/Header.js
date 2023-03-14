import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from ".././asset/codepen.png";
import "./Header.css";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const Header = () => {
  return (
    <>
      <AppBar
        style={{ backgroundColor: "black", height: 70 }}
        position="static"
      >
        <Toolbar>
          <img
            src={logo}
            alt=""
            width="35px"
            style={{ color: "white", cursor: "pointer", marginLeft: -10 }}
          />
          <h3 className="logo-title">Code Pen</h3>
          <ModeEditIcon className="edit" />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
