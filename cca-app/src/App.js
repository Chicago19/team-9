import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/home.js';
import ChildrenHome from './components/children/childrenHome.js';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/childrenHome" component={ChildrenHome}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
