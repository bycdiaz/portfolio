import React from 'react';
import NavMenu from "./NavMenu";
import "../styles/header.css";

function Header(props) {
  return (
    <div className="header">
      <h1 className="title">
        {props.title}
      </h1>
      <NavMenu 
        showAbout={props.showAbout}
        showSkills={props.showSkills}
        showProjects={props.showProjects}
        showContact={props.showContact}
      />
    </div>
  );
}

export default Header;
