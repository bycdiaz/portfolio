import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";

function Routes() {
  return (
    <div className="routes">
      <Switch>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
