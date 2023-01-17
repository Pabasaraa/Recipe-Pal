import React from "react";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import styles from './styles/App.module.css';

import AllRecipes from './components/all-recipes.js';
import RecipeDescription from "./components/recipe-description.js";
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
        <Route path="/description">
          <LocationPrinter />
        </Route>
      </Switch>
    </Router>
  );
}

function LocationPrinter(){
  let location = useLocation();
  return (
    <RecipeDescription location={location} />
  )
}

export default App;
