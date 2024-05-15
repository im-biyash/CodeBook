import React from 'react'
import Cartcard from './Cartcard'

const CartList = () => {
   const cartlist = [
    {
      "id": 1001,
      "name": "Basics to Advance in ReactJS",
      "overview": "Will cover beginner-friendly ReactJS course from beginning to advance with a lot of projects and real-life projects.",
      "price": 29,
      "image": "/assets/images/img1.avif",
      "rating": 5,
      "inStock": true,
      "size": 5,
      "bestSeller": true
    },
    {
      "id": 1002,
      "name": "Mastering Redux",
      "overview": "Comprehensive course on Redux state management for complex React applications.",
      "price": 39,
      "image": "/assets/images/img2.avif",
      "rating": 3,
      "inStock": true,
      "size": 4,
      "bestSeller": false
    }
   ]
  
  return (
<>

    <section className='text-3xl'>
 <p className='text-2xl text-center font-semibold dar:text-slate-100 my-10 underline'>
    My cart: {2}
 </p>
    </section>
    <section>
      {cartlist.map((product) => (
        <Cartcard key = {product.id}  product={product}/>
      ))}
    </section>
    <section className='max-w-4xl m-auto'>
      <div className='flex flex-col p-2 border-b dar:border-slate-700 text-lg '>
        <p className='flex justify-between my-2'>
            <span>
    Total Amount:
            </span>
            <span>
$99
            </span>
        </p>
          
      </div>
      <div className='text-right my-5'>
        <button className='bg-green-600 text-white py-2 px-6 rounded-lg'>
          place order
        </button>
      </div>
    </section>
    </>
  )
}

export default CartList
