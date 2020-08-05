import React from 'react';
import Navigation from './Navigation';
import Banner from '../HomeDefault/Banner';
import LatestNews from '../HomeDefault/LatestNews';
import Tab from '../HomeDefault/Tab';

//import Footer from '../Common/Footer';
const Home = () => {
  return (
    <React.Fragment>
      <Navigation />
      {/* Main Banner */}
      <Banner />
      {/* Features Area */}

      {/* Blog Area */}
      <LatestNews />
      <Tab />

      {/* <Slider /> */}
      {/* {Slider} */}
    </React.Fragment>
  );
};

export default Home;
