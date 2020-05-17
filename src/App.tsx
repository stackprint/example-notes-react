import React from "react";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";

import { Router, Route, Switch } from "react-router-dom";
import Notes from "./components/Notes";
import history from "./utils/history";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <div className="container mt-4">
          <Switch>
            <Route path="/" exact />
            <PrivateRoute path="/notes" component={Notes} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
