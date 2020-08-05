import React from 'react';
import Navigation from './Navigation';
import Footer from '../Common/Footer';
import LoginForm from '../Login/LoginForm';
import RegistForm from '../Login/RegistForm';

const Login = () => {
  return (
    <React.Fragment>
      <Navigation />

      <LoginForm />
      <RegistForm />
      <Footer />
    </React.Fragment>
  );
};

export default Login;
