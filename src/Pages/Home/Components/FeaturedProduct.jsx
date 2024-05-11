import React from 'react'
import { useState, useEffect } from 'react'
import ProductCard from '../../../Components/ProductCard'


const FeaturedProduct = () => {

  const[products, setProducts] = useState([]);
  useEffect (() =>{
    async function getProducts(){
      const response = await fetch('http://localhost:3001/featuredProducts');
      const data = await response.json();
      console.log(data);
      setProducts(data);
      
    }
    getProducts();
  },[]);
  return (
    <>
       <h1 className='text-2xl text-center mb-5'>Featured product</h1>
       <div className='flex flex-wrap justify-around lg:flex-row'>
    
        {products.map((product) => (
          
          <ProductCard key={product.id} product={product}/>
        ))}
    </div>
    </>
  )
}

export default FeaturedProduct;
