import React from 'react';
import Navigation from './Navigation';
import HomeIntro from '../HomeDefault/HomeIntro';
import Footer from '../Common/Footer';
const Home = () => {
  return (
    <React.Fragment>
      <Navigation />
      <HomeIntro />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
