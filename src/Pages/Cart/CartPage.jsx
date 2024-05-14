import React from 'react'
import CartEmpty from './CartEmpty'
import CartList from './CartList'
const CartPage = () => {

    const cartlistlength = 0;
  return (
    <div>
      {cartlistlength === 0 ? <CartEmpty /> :
       <CartList/>}
    </div>
  )
}

export default CartPage
