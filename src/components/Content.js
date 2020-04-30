import React from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function Content(props) {
  function ShowContents() {
    if (props.about) {
      return <About />
    } else if (props.skills) {
      return <Skills />
    } else if (props.projects) {
      return <Projects />
    } else if (props.contact) {
      return <Contact />
    }
  }

  return (
    <div className="contents">
      {ShowContents()}
    </div>
  );
}

export default Content;