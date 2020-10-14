import React from 'react';
import './App.css';
//ksong 0803
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Pages/Login';
import Home from './components/Pages/Home';
import LatestNewsPage from './components/Pages/LatestNewsPage';
import WeeklyRank from './components/Pages/WeeklyRank';
import DetailMain from './components/Pages/DetailMain';
import Regist from './components/Pages/Regist';
function App() {
  return (
    <Router basename={window.location.pathname || ''}>
      <React.Fragment>
        <Switch>
          <Route exact={true} path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/regist' component={Regist} />
          <Route exact path='/nowplaying' component={LatestNewsPage} />
          <Route exact path='/weeklyrank' component={WeeklyRank} />
          <Route
            exact
            path='/detail/:id'
            render={({ match }) => (
              <DetailMain key={match.params.id} match={match} />
            )}
          />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
