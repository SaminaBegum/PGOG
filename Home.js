import React from 'react';
import Banner from '../components/Banner';
import WhoWeAre from './WhoWeAre ';
import Businesses from './Businesses';
import Contact from './Contact';
import CompanyMap from './CompanyMap';
import Leadership from './Leadership';
import AutoSlider from '../components/AutoSlider';

import Success from './Success';

const Home = () => {
  return (
    <div>
      
      <Banner/>
      <WhoWeAre/>
      <AutoSlider/>
      <Businesses />
     
      <Success/>
      <Leadership/>
      <Contact />
      <CompanyMap />
    </div>
  );
};

export default Home;
