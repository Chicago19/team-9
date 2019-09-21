import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/home.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
