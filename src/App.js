import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import './App.css';

import AllRecipes from './components/all-recipes.js';

function App() {
  return (
    <Router>
      <div className="App">
      
      </div>
      <Switch>
        <Route path="/recipes">
          <AllRecipes />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
