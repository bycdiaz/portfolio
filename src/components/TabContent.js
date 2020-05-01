import React from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import "../styles/tabcontent.css";

function TabContent(props) {
  function ShowContents() {
    if (props.about) {
      return <About />
    } else if (props.skills) {
      return <Skills />
    } else if (props.projects) {
      return <Projects />
    }
  }

  return (
    <div className="contents">
      {ShowContents()}
    </div>
  );
}

export default TabContent;
