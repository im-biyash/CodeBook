import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../features/cartSlice'; // Update the path to your cartSlice

const ProductCard = ({ product }) => {
  const { id, name, overview, price, image, rating } = product;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isInCart = cart.some(item => item.id === id);

  const handleCartToggle = () => {
    if (isInCart) {
      dispatch(removeFromCart({ id: id.toString() }));
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-slate-800 dark:text-white">
      <Link to={`/products/${id}`}>
        <img className="rounded-t-lg w-full h-64" src={image} alt={name} />
      </Link>
      <div className="p-5">
        <Link to={`/products/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight">{name}</h5>
        </Link>
        <p className="mb-3 font-normal">{overview}</p>
        <div className="flex items-center my-2">
          <Rating rating={rating} />
        </div>
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-xl font-semibold">Price: ${price}</h1>
          <button
            onClick={handleCartToggle}
            className={`p-2 rounded-xl ${isInCart ? 'bg-red-600' : 'bg-green-600'} text-white`}
          >
            {isInCart ? 'Remove from cart' : 'Add to cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
