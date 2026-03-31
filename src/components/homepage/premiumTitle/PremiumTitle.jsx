import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const PremiumTitle = () => {
  const [selectedType, setSelectedType] = useState("products");
  const handleSelectedType = (selectedRef) => {
    setSelectedType(selectedRef);
  };
  return (
    <div className="container mx-auto mt-16 space-y-5 ">
      <div className="text-center space-y-3">
        <h2 className="text-4xl">Premium Digital Tools</h2>
        <p className="text-gray-400 text-base">
          Choose from our curated collection of premium digital products
          designedto boost your productivity and creativity.
        </p>
        <div className="inline-flex items-center bg-white p-1 rounded-full shadow-md border border-gray-100">
          <button
            className={`px-8 py-3 rounded-full ${selectedType === "products" ? " text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "bg-tra"}  font-semibold transition-all hover:opacity-90`}
            onClick={() => handleSelectedType("products")}
          >
            Products
          </button>

          <button
            className={`px-8 py-3 rounded-full ${selectedType === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-tra"}  font-semibold transition-all hover:opacity-90`}
            onClick={() => handleSelectedType("cart")}
          >
            Cart (2)
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl rounded-3xl">
          <div className="card-body">
            <span className="badge badge-xs bg-[#FEF3C6] text-[#BB4D00] text-left">Best Seller</span>
            <div className="flex-row justify-between">
              <h2 className="text-3xl font-bold">AI Writing Pro</h2>
              <p className="text-md">Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li className="flex justify-baseline items-center">
                <TiTick className="text-green-400 text-xl"/>
                <span>Unlimited AI generations</span>
              </li>
              <li className="flex justify-baseline items-center">
                <TiTick className="text-green-400 text-xl"/>
                <span>Unlimited AI generations</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn btn-primary btn-block rounded-3xl text-center">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumTitle;
