import React from 'react';
import Navigation from './Navigation';
import Footer from '../Common/Footer';
import RegistForm from '../Login/RegistForm';
const Regist = () => {
  return (
    <React.Fragment>
      <Navigation />
      <RegistForm />
      <Footer />
    </React.Fragment>
  );
};

export default Regist;