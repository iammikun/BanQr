import React from "react";
import HeroSection from "../../Components/HomeSection/HeroSection/HeroSection";
import Method from "../../Components/HomeSection/Method/Method";
import Donts from "../../Components/HomeSection/MethodCards/Donts";
import Brands from "../../Components/HomeSection/Brands/Brands";

const Home = () => {
  return (
    <div>
      <div>
        <HeroSection />
        <Method />
        <Donts />
        <Brands />
      </div>
    </div>
  );
};

export default Home;
