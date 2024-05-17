import React from 'react'
import { useDispatch} from 'react-redux'
import {removeFromCart} from '../../features/cartSlice'
const Cartcard = ({product}) => {

  const dispatch = useDispatch();
  return (
    <div className='flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 '>
      <div className='flex'>
  <img src={product.image} className = "h-28 w-28 " />
     <div>
        <h1 className='p-2 text-xl'>{product.name}</h1>
        <button className='text-base ml-2 text-red-400' onClick={() => dispatch(removeFromCart(product))}>remove</button>
     </div>
      </div>
   <div>
    <span> $:{product.price}</span>
   </div>
    </div>
  )
}

export default Cartcard
