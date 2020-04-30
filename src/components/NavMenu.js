import React from 'react';
import "../styles/navmenu.css"

function NavMenu(props) {
  return (
    <ul className="nav-bar">
      <li className="nav-item">About Me</li>
      <li className="nav-item">Skills</li>
      <li className="nav-item">Projects</li>
      <li className="nav-item">Contact</li>
    </ul>
  );
}

export default NavMenu;
