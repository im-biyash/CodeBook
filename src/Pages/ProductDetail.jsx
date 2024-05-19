import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "../Components/Rating";


const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  


  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3001/products/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const { name, overview, price, image, rating, bestSeller, inStock } = product;

  return (
    <div className="max-w-4xl  mx-auto my-12 h-screen dark:text-slate-100">
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-4">
          <img
            className="w-full h-80 object-cover rounded-lg"
            src={image}
            alt={name}
          />
        </div>
        <div className="lg:w-1/2 lg:pl-4 mt-4 lg:mt-0">
          <h3 className="text-3xl font-semibold">${price}</h3>
          <Rating rating={rating} />
          <div className="flex items-center mb-4">
            {bestSeller && (
              <span className=" text-lime-600 p-1 rounded bg-gray-100 mr-2">
                Best Seller
              </span>
            )}

            {inStock ? (
              <span className="text-green-600">In Stock</span>
            ) : (
              <span className="text-red-600">Out of Stock</span>
            )}
          </div>
          <p className="text-lg text-gray-700 mt-2 mb-4">{overview}</p>

          <div className="flex justify-between items-center">
            <button onClick={handleCartToggle} className= "p-2 px-4 rounded-lg  text-white  bg-green-600 text-white">
               Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
