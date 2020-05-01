import React from 'react';
import "../styles/navmenu.css"

function NavMenu(props) {
  return (
    <ul className="nav-bar">
      <li className="nav-item" onClick={props.showAbout}>About Me</li>
      <li className="nav-item" onClick={props.showSkills}>Skills</li>
      <li className="nav-item" onClick={props.showProjects}>Projects</li>
    </ul>
  );
}

export default NavMenu;
