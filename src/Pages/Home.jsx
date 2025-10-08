import React from 'react';
import HeroBanner from '../Components/HeroBanner';
import TrustedSection from '../Components/TrustedSection';
import TrendingApps from '../Components/TrendingApps';

const Home = () => {
    return (
        <div>
           <HeroBanner/>
           <TrustedSection/>
           <TrendingApps/>
        </div>
    );
};

export default Home;