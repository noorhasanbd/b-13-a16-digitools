import React from "react";
import cartImg from "../../../assets/banner.png"
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  return (
    <div>
      <div className="card bg-base-200 w-full shadow-md p-4 mb-16">
        <div className="card-body">
          <h2 className="card-title">Your Cart</h2>
         <div className=" flex justify-center items-center">
            <FaShoppingCart className="text-8xl text-gray-400"/>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
