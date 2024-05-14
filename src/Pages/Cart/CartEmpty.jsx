import React from 'react'
import { Link } from 'react-router-dom'
import { BiSolidShoppingBags } from "react-icons/bi";
const CartEmpty = () => {
  return (
    <section className=' min-h-screen text-xl  text-cneter max-w-4xl mx-auto my-10 dark:text-slate-100'>
    <div className='  my-6 border mx-auto text-center p-4'>
        <p className='bi bi-cart text-green-500 text-7xl mb-5'></p>
        <BiSolidShoppingBags className='text-3xl text-center text-green-600' />
        <p>Oops your cart looks empty</p>
        <p> Add ebook sto your cart from our store collection</p>
    <Link to="/products" className="bg-blue-600 my-4 mt-7 text-white text-lg w-full  p-2 rounded-lg">
        Shop Now
    </Link>
    </div>
    </section>
  )
}

export default CartEmpty
