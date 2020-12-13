import React from "react";
import Nav from "./components/nav/nav";
import Projects from "./components/projects/projects";
import Home from "./components/Home/home";

function App() {
  return (
    <div>
      <Nav />
      <Projects exact path="/projects" />
      <Home exact path="/home" />
    </div>
  );
}

export default App;
