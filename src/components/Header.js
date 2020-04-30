import React from 'react';
import NavMenu from "./NavMenu";
import "../styles/header.css";

function Header(props) {
  return (
    <div className="header">
      <h1 className="title">
        {props.title}
      </h1>
      <NavMenu />
    </div>
  );
}

export default Header;
