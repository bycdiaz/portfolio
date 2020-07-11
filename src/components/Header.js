import React from 'react';
import NavMenu from "./NavMenu";
import "../styles/header.css";

function Header(props) {
  return (
    <div className="header">
      <h1 className="name">
        {props.name}
      </h1>
      <h2 className="title fade-in">
        {props.title}
      </h2>
      <NavMenu />
    </div>
  );
}

export default Header;
