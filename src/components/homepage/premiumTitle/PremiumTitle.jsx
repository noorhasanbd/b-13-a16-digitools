import React from "react";

const PremiumTitle = () => {
  return (
    <div className="container mx-auto mt-16">
      <div className="text-center space-y-3">
        <h2 className="text-4xl">Premium Digital Tools</h2>
        <p className="text-gray-400 text-base">
          Choose from our curated collection of premium digital products
          designedto boost your productivity and creativity.
        </p>
        <div className=" flex justify-center items-center gap-2 mt-4">
            
          <a className="btn border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white transition-transform  hover:scale-105 active:scale-95 rounded-2xl">
            Products
          </a>
          <a className="btn transition-transform  hover:scale-105 active:scale-95 rounded-2xl">
            Cart
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default PremiumTitle;
