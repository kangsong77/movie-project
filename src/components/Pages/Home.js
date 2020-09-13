import React from 'react';
import Navigation from './Navigation';
import HomeIntro from '../HomeDefault/HomeIntro';
import LatestNews from '../HomeDefault/LatestNews';
import Tab from '../HomeDefault/Tab';


//import Footer from '../Common/Footer';
const Home = () => {
  return (
    <React.Fragment>
      <Navigation />
      <HomeIntro />
      <LatestNews />
      <Tab />
    
    </React.Fragment>
  );
};

export default Home;
