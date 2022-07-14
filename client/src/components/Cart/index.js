/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : Cart/index.js         */
/* Team     : Coders of Hyrule      */
/* Date     : 07/13/2022            */
/* Modified : 07/13/2022            */
/* -------------------------------- */
// Import react
import React, { useEffect } from "react";
// Import indexed database
import { idbPromise } from "../../utils/helpers"
// Import Cart item
import CartItem from "../CartItem";
// Import authorization
import Auth from "../../utils/auth";
// Import store context
import { useStoreContext } from "../../utils/GlobalState";
// Import actions to handle cart
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import "./style.css";
// Cart section
const Cart = () => {
  const [state, dispatch] = useStoreContext();
  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, games: [...cart] });
    };
    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);
  // Funtion to toggle cart
  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }
  // Function to calculate total games purchased
  function calculateTotal() {
    let sum = 0;
    state.cart.forEach(item => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }
  // Validate if cart is open
  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span
          role="img"
          aria-label="trash">🛒</span>
      </div>
    );
  }
  // Show cart section
  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>[close]</div>
      <h2>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map(item => (
            <CartItem key={item._id} item={item} />
          ))}
          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>
            {
              Auth.loggedIn() ?
                <button>
                  Checkout
              </button>
                :
                <span>(log in to check out)</span>
            }
          </div>
        </div>
      ) : (
          <h3>
            <span role="img" aria-label="shocked">
              😱
          </span>
          You haven't added anything to your cart yet!
          </h3>
        )}
    </div>
  );
};
// Export cart
export default Cart;