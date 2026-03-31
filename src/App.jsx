import { Suspense, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/homepage/banner/Banner";
import Stats from "./components/homepage/stats/Stats";
import PremiumTitle from "./components/homepage/premiumTitle/PremiumTitle";
import GetStarted from "./components/homepage/getStarted/GetStarted";

const fetchPlayer = async () => {
  const res = (await fetch("/products.json")).json();
  return res;
};

function App() {
  const promiseData= fetchPlayer();
  console.log(promiseData)
  return (
    
    <>
      <Navbar/>
      <Banner/>
      <Stats/>
      <Suspense fallback={<span className="loading loading-ring loading-lg"></span>}>
        <PremiumTitle promiseData={promiseData}/>

      </Suspense>


      <GetStarted/>
      
      
    </>
  );
}

export default App;
