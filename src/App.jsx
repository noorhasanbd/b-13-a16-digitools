import { Suspense, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/homepage/banner/Banner";
import Stats from "./components/homepage/stats/Stats";
import PremiumTitle from "./components/homepage/premiumTitle/PremiumTitle";
import GetStarted from "./components/homepage/getStarted/GetStarted";
import PricingTitle from "./components/homepage/pricingSection/PricingTitle";

const fetchPlayer = async () => {
  const res = (await fetch("/products.json")).json();
  return res;
};
const fetchSteps= async ()=>{

  const stepRes= (await fetch("/getStarted.json")).json()
  return stepRes;
}

function App() {
  const promiseData= fetchPlayer();
  const promiseStep= fetchSteps();
  // console.log(promiseData)
  console.log(promiseStep);
  return (
    
    <>
      <Navbar/>
      <Banner/>
      <Stats/>
      <Suspense fallback={<span className="loading loading-ring loading-lg"></span>}>
        <PremiumTitle promiseData={promiseData}/>

      </Suspense>


      <Suspense fallback={<span className="loading loading-ring loading-lg"></span>}>
        <GetStarted promiseStep={promiseStep}/>
      </Suspense>
      <PricingTitle/>      
      
    </>
  );
}

export default App;
