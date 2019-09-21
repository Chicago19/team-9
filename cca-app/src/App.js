import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/home.js';
import ChildrenHome from './components/children/childrenHome.js';
import ChildrenGames1 from './components/children/childrenGames1.js';
import ChildrenGames2 from './components/children/childrenGames2.js';
import ColoringBook from './components/children/coloringBook.js';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/children" component={ChildrenHome}/>
        <Route exact path="/childrenGames1" component={ChildrenGames1}/>
        <Route exact path="/childrenGames2" component={ChildrenGames2}/>
        <Route exact path="/coloringBook" component={ColoringBook}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
