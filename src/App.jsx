import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/homepage/banner/Banner";
import Stats from "./components/homepage/stats/Stats";
import PremiumTitle from "./components/homepage/premiumTitle/PremiumTitle";


function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Stats/>
      <PremiumTitle/>
    </>
  );
}

export default App;
