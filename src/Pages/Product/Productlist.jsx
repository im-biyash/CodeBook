// ProductList.js
import React, { useState, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import ProductCard from "../../Components/ProductCard";
import FilterBar from "./Componnets/FilterBar";

const ProductList = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [rating, setRating] = useState('');
  const [bestSeller, setBestSeller] = useState(false);
  const [inStock, setInStock] = useState(false);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("http://localhost:3001/products");
      const data = await response.json();
      setProducts(data);
    }
    getProducts();
  }, []);

  const handleSort = (sortBy) => {
    setSortBy(sortBy);
  };

  const filteredProducts = products.filter((product) => {
    if (rating !== '') {
      return product.rating >= parseInt(rating);
    }
    if (bestSeller) {
      return product.bestSeller === true;
    }
    if (inStock) {
      return product.inStock === true;
    }
    return true;
  }).sort((a, b) => {
    if (sortBy === 'priceLowToHigh') {
      return a.price - b.price;
    } else if (sortBy === 'priceHighToLow') {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  return (
    <div>
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold mb-5">
            All eBooks {filteredProducts.length}
          </span>
          <span>
            <button
              id="dropdownMenuIconButton"
              type="button"
              onClick={() => setShowFilter(!showFilter)}
            >
              <BsThreeDotsVertical />
            </button>
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-5 lg:flex-row">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      {showFilter && (
        <FilterBar
          handleSort={handleSort}
          close={setShowFilter}
          setRating={setRating}
          setBestSeller={setBestSeller}
          setInStock={setInStock}
        />
      )}
    </div>
  );
};

export default ProductList;
