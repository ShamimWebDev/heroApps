import React, { useState, useEffect } from "react";
import HeroBanner from "../Components/HeroBanner";
import TrustedSection from "../Components/TrustedSection";
import TrendingApps from "../Components/TrendingApps";
import LoadingSpinner from "../Components/LoadingSpinner";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <HeroBanner />
      <TrustedSection />
      <TrendingApps />
    </div>
  );
};

export default Home;
