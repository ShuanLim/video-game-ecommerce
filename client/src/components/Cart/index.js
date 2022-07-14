/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : Cart/index.js         */
/* Team     : Coders of Hyrule      */
/* Date     : 07/13/2022            */
/* Modified : 07/13/2022            */
/* -------------------------------- */
// Import react module
import React, { useEffect } from "react";
// Import stripe module
import { loadStripe } from '@stripe/stripe-js';
// Import apollo server
import { useLazyQuery } from '@apollo/client';
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
// Import query checkout
import { QUERY_CHECKOUT } from '../../utils/queries';
// Import style file
import "./style.css";
// Use stripe
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
// Cart section
const Cart = () => {
  const [state, dispatch] = useStoreContext();
  // Query for checkout
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);
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
  };
  // Function to checkout in stripe
  function submitCheckout() {
    const gameIds = [];
    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        gameIds.push(item._id);
      }
    });
    getCheckout({
      variables: { games: gameIds },
    });
  };
  // Validate if cart is open
  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span
          role="img"
          aria-label="trash">🛒</span>
      </div>
    );
  };
  // Show cart section
  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>✗</div>
      <h2>Shopping Games Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map(item => (
            <CartItem key={item._id} item={item} />
          ))}
          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>
            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
          <h3>
            <span role="img" aria-label="shocked">
            🕹️
          </span>
          You haven't added any game to your cart yet!
          </h3>
        )}
    </div>
  );
};
// Export cart
export default Cart;