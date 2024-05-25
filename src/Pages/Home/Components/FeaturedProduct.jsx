import React, { useState, useEffect } from 'react';
import ProductCard from '../../../Components/ProductCard';

const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch('http://localhost:3001/featuredProducts');
      const data = await response.json();
      console.log(data);
      setProducts(data);
    }
    getProducts();
  }, []);

  return (
    <>
      <section className=" min-h-screen mt-20 md:mt-24 lg:mt-32">
        <h1 className="text-2xl text-center mb-8 dark:text-slate-100">Featured Products</h1>
        <div className="flex flex-wrap justify-around md:mt-24 lg:flex-row">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturedProduct;
