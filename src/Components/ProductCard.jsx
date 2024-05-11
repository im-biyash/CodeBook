import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";


const ProductCard = ({ product }) => {
 
  const { id, name, overview, price, image, rating } = product;
  return (
    <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700 dark:bg-slate-800 dark:text-white">
       <Link to = {`/products/${id}`}>
      <img className="rounded-t-lg w-full h-64" src={image} alt="" />
 </Link>
      <div className="p-5">
        <Link to = {`/products/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight">
            {name}
          </h5>
        </Link>
        <p className="mb-3 font-normal  ">
          {overview}
        </p>
        <div className="flex items-center my-2">

      <Rating rating={rating} />

</div>


        <div className="lowersection flex justify-between">
          <h1> Price:{price}</h1>
          <button className="bg-green-600 p-2 rounded-xl">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
