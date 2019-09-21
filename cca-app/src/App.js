import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/home.js';
import ChildrenHome from './components/children/childrenHome.js';
import ChildrenGames1 from './components/children/childrenGames1.js';
import ChildrenGames2 from './components/children/childrenGames2.js';
import ColoringBook from './components/children/coloringBook.js';
import ParentsHome from './components/parents/parentsHome.js';
import Stress from './components/parents/stress.js';
import Bullying from './components/parents/bullying.js';
import Police from './components/parents/police.js';
import Faq from './components/parents/faq.js';
import Forms from './components/parents/forms.js';
import Calendar from './components/calendar.js';
import HomeGuide from './components/homeguide.js';


function App() {
  return (
    <BrowserRouter>
      <HomeGuide />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/children" component={ChildrenHome}/>
        <Route exact path="/childrenGames1" component={ChildrenGames1}/>
        <Route exact path="/childrenGames2" component={ChildrenGames2}/>
        <Route exact path="/coloringBook" component={ColoringBook}/>
        <Route exact path="/parents" component={ParentsHome}/>
        <Route exact path="/calendar" component={Calendar}/>
        <Route exact path="/stress" component={Stress}/>
        <Route exact path="/police" component={Police}/>
        <Route exact path="/faq" component={Faq}/>
        <Route exact path="/forms" component={Forms}/>
        <Route exact path="/bullying" component={Bullying}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
