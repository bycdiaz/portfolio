import React from 'react';
import Header from "./components/Header";
import Routes from "./components/Routes";
import "./styles/app.css"

function App() {
  return (
    <div className="app">
      <Header
        name="Carlos Diaz"
        title="Web Developer"
      />
      <Routes />
    </div>
  );
}

export default App;
