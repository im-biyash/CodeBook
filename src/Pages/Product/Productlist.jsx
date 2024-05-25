import React, { useState, useEffect } from "react";
import ProductCard from "../../Components/ProductCard";
import FilterBar from "./Componnets/FilterBar"; // Corrected typo in 'Components'
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [rating, setRating] = useState('');
  const [bestSeller, setBestSeller] = useState(false);
  const [inStock, setInStock] = useState(false);

  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get('q');
  console.log(searchTerm);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch(`http://localhost:3001/products?name_like=${searchTerm ? searchTerm : ""}`);
      const data = await response.json();
      setProducts(data);
    }
    getProducts();
  }, [searchTerm]);

  const handleSort = (sortBy) => {
    setSortBy(sortBy);
  };

  const filteredProducts = products
    .filter((product) => {
      return (
        (rating === '' || product.rating >= parseInt(rating)) &&
        (!bestSeller || product.bestSeller === true) &&
        (!inStock || product.inStock === true)
      );
    })
    .sort((a, b) => {
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
      <section className="my-5 min-h-screen">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold mb-5 dark:text-slate-100">
            All eBooks ({filteredProducts.length})
          </span>
          <span className="mt-3 lg:mt-0 lg:mr-40">
            <button
              id="dropdownMenuIconButton"
              type="button"
              onClick={() => setShowFilter(!showFilter)}
              className="dark:text-slate-100 font-bold bg-blue-300 dark:bg-gray-600 rounded-lg p-2"
            >
              Filter By:
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
