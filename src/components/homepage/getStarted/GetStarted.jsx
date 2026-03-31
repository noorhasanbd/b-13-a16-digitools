import React from "react";
import userImg from "../../../assets/user.png";

const GetStarted = () => {
  return (
    <div className="bg-[#F9FAFC] my-32">
      <div className="container mx-auto py-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl">Get Started In 3 Steps</h2>
          <p>Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center pt-10">
          <div className="card bg-base-100  shadow-sm px-4  rounded-2xl">
            
            <div className="card-body flex flex-col justify-center items-center">

                <div className="self-end flex items-center justify-center w-14 h-14 bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-4 rounded-full text-white">1</div>
                <div className="bg-[#E1E7FF] rounded-full p-8">
                    <img src={userImg} width='100px' alt="" />
                </div>
                <div className="space-y-2 text-center">
                    <h3 className="text-3xl font-bold text-center">Create Account</h3>
                    <p className="text-md">Sign up for free in seconds. No credit card required to get started.</p>
                </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
