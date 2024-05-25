import React from 'react';
import { useSelector } from 'react-redux';
import Cartcard from './Cartcard';

const CartList = () => {
  const cartlist = useSelector((state) => state.cart.cart);
  const totalAmount = useSelector((state) => state.cart.total);

  return (
    <>
      <section className='text-3xl'>
        <p className='text-2xl text-center font-semibold dark:text-slate-100 my-10 underline'>
          My cart: {cartlist.length}
        </p>
      </section>
      <section>
        {cartlist.map((product) => (
          <Cartcard key={product.id} product={product} />
        ))}
      </section>
      <section className='max-w-4xl m-auto'>
        <div className='flex flex-col p-2 border-b dark:border-slate-700 text-lg'>
          <p className='flex justify-between my-2'>
            <span>Total Amount:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </p>
        </div>
        <div className='text-right my-5'>
          <button className='bg-green-600 text-white py-2 px-6 rounded-lg'>
            Place Order
          </button>
        </div>
      </section>
    </>
  );
};

export default CartList;
