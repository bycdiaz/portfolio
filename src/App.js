import React from 'react';
import Header from "./components/Header";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <Header title="My Site"/>
      <Bio title="About Me" />
      <Skills title="My Skills"/>
      <Projects title="My Projects"/>
      <Contact title="Contact Me"/>
    </div>
  );
}

export default App;
