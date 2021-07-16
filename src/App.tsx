import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';


function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/Home" component={Home} />
        </Switch>
    </Router>
  );
}

export default App;
