import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from './styles/App.module.css';

import AllRecipes from './components/all-recipes.js';
import Header from './components/header.js';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Header/>
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
