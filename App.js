import React from 'react';
import './App.scss';
import { BrowserRouter as  Switch } from 'react-router-dom';
import Nav from './Components/NavbarPage.jsx'
import { Route, Redirect } from 'react-router-dom';
import Canterbury from './Components/Canterbury';
import Home from './Components/Home';

function App() {
  return (
    <div >
      <Nav></Nav>
      <Switch>
        <Route exact path="/">
          <Redirect to="/Components/Home" />
        </Route>
        <Route exact path="/Components/Home" component={Home}>
          <Home />
        </Route>
        <Route exact path="/Components/Canterbury" component={Canterbury}>
          <Canterbury />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
