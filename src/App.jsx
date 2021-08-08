import LogIn from "./components/LogIn";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from "react-router-dom";
import React, { Component } from "react";
import TaskList from "./components/TaskList";

class App extends Component {
  render() {
    return (
      <Router>
        <Link to="/to-do-list"> To Do List </Link>
        <Switch>
          <Route exact path="/login">
            {localStorage.getItem("name") !== null ? (
              <Redirect to="/to-do-list" />
            ) : (
              <LogIn />
            )}
          </Route>
          <Route path="/to-do-list">
            {localStorage.getItem("name") !== null ? ( //kiểm tra context thay vì localStorage
              <TaskList />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route exact path="/">
            <Redirect to="/to-do-list" />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
