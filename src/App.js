import React, { useState } from "react";
import logo from "./logo.svg";
import Title from "./components/Title";
import Input from "./components/Input";
import "./App.css";
import Button from "./components/Button";
import HomeContainer from "./containers/HomeContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WeatherDetails from "./containers/WeatherDetails";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path={"/weather/:city"} component={WeatherDetails} />
          <Route path={"/"} component={HomeContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
