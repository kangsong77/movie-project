import React from 'react';
import './App.css';
//ksong 0803
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Pages/Login';

import Home from './components/Pages/Home';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact={true} path='/' component={Home} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
