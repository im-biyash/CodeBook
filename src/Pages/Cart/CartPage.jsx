import React from "react";
import CartEmpty from "./CartEmpty";
import CartList from "./CartList";
const CartPage = () => {
  const cartlistlength = 0;
  return (
    <div className="h-screen dark:text-slate-100">
      {cartlistlength ? <CartEmpty /> :
      <CartList />}
    </div>
  );
};
`;`
export default CartPage;
