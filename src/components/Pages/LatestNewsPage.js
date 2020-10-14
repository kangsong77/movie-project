import React from 'react';
import Navigation from './Navigation';
import LatestNews from './LatestNews';
import Footer from '../Common/Footer';

const LatestNewsPage = () => {
  return (
    <React.Fragment>
      <Navigation />
      <LatestNews />
      <Footer />
    </React.Fragment>
  );
};

export default LatestNewsPage;