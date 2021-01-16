import React from "react";
import Nav from "./components/nav/nav";
import Projects from "./components/projects/projects";
import Home from "./components/Home/home";
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/projects" component={Projects} exact />
      </Switch>
    </div>
  );
}

export default App;
