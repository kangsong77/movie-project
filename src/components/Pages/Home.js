import React from 'react';
import Navigation from './Navigation';
import Banner from '../HomeDefault/Banner';
import LatestNews from '../HomeDefault/LatestNews';
import Tab from '../HomeDefault/Tab';
import Login from './Login';

//import Footer from '../Common/Footer';
const Home = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Banner />
      <LatestNews />
      <Tab />
    
    </React.Fragment>
  );
};

export default Home;
