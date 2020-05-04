import React, { useContext, useState } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

export default function Cart({ img }) {
  const [buttonTxt, setButtonTxt] = useState("Place Order");
  const { cartItems, emptyCart, addFavoritesToCart } = useContext(Context);
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  const totalCost = (cartItems.length * 5.99).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const placeOrder = () => {
    setButtonTxt("Ordering...");
    setTimeout(() => {
      emptyCart();
      console.log("Order Complete!");
      setButtonTxt("Place Order");
    }, 3000);
  };

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCost}</p>
      {cartItems.length > 0 ? (
        <div className="order-button">
          <button onClick={() => placeOrder()}>{buttonTxt}</button>
        </div>
      ) : (
        <>
          <p>There are no items in your cart.</p>
          <h3>Do you want to add your Favorites to cart?</h3>
          <button className="favbutton" onClick={() => addFavoritesToCart()}>
            Add Favorites
          </button>
        </>
      )}
    </main>
  );
}
