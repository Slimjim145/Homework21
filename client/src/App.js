import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar"
import Jumbotron from "./components/Jumbotron"
import Search from "./pages/Search";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar></NavBar>
          <Jumbotron></Jumbotron>
          <Switch>
            <Route exact path={["/", "/search"]}>
              <Search></Search>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
