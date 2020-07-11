import React from 'react';
import { Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
const RoutesContainer = styled.div`
margin-top: 30px;
max-width: 60vw;
`

function Routes() {
  return (
    <RoutesContainer>
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
    </RoutesContainer>
  );
}

export default Routes;
