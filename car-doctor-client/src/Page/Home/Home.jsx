import React from "react";
import Banner from "./Banner/Banner";

import Services from "./Services/Services";
import About from "./About/About";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-[1300px] mx-auto">
        <About />
      </div>
      <Services />
    </div>
  );
};

export default Home;
