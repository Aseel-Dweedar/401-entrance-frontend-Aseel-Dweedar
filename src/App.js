import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Favorite from "./components/Favorite";
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/fav">
            <Favorite />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
