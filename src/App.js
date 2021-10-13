import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home.js';
import Discover from './Discover.js';
import Profile from './Profile.js';
import './App.css';

function App() {
  return (
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/discover">
            <Discover />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
