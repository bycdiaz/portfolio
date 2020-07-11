import React from 'react';
import Header from "./components/Header";
import Routes from "./components/Routes";
import styled from 'styled-components';
const AppContainer = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap");

font-family: "Roboto Slab", serif;
width: 80vw;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
`

function App() {
  return (
    <AppContainer>
      <Header
        name="Carlos Diaz"
        title="Web Developer"
      />
      <Routes />
    </AppContainer>
  );
}

export default App;
