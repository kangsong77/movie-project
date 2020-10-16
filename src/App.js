import React from 'react';
import './App.css';
//ksong 0803
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './components/Login/LoginForm';
import Home from './components/Pages/Home';
import LatestNews from './components/Pages/LatestNews';
import WeeklyRank from './components/Pages/WeeklyRank';
import DetailMain from './components/Pages/DetailMain';
import Regist from './components/Pages/Regist';
import MyMovieList from './components/Pages/MyMovieList';
import AuthRoute from './components/Login/AuthRoute';
import {isUserAuthenticated} from './utils/authUtils';
import Navigation from './components/Common/Navigation';
import Footer from './components/Common/Footer';

//ksong 0803 함수형 변환
function App() {
  return (
    <Router basename={window.location.pathname || ''}>
      <React.Fragment>
        <Navigation />
        <Switch>
          <Route exact={true} path='/' component={Home} />
          {<Route exact path='/login' component={LoginForm} />}
          <Route exact path='/regist' component={Regist} />
          <Route exact path='/nowplaying' component={LatestNews} />
          <Route exact path='/weeklyrank' component={WeeklyRank} />
          {/* <Route exact path='/login' component={LoginForm} /> */}
          <Route
            exact
            path='/detail/:id'
            render={({ match }) => (
              <DetailMain key={match.params.id} match={match} />
            )}
          />
          <AuthRoute
            authenticated={isUserAuthenticated()}
            path="/mymovies"
            render={props => <MyMovieList {...props} />}
          />
        </Switch>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
