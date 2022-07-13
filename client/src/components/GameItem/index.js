/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : GameItem/index.js     */
/* Team     : Coders of Hyrule      */
/* Date     : 07/09/2022            */
/* Modified : 07/12/2022            */
/* -------------------------------- */
// Import react module
import React from "react";
// Import react dom
import { Link } from "react-router-dom";
// Import function to pluralize counter
import { pluralize } from "../../utils/helpers";
// Import store context
import { useStoreContext } from "../../utils/GlobalState";
// Import methods to add games in cart and update stock
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
// Import to get indexed database
import { idbPromise } from "../../utils/helpers";
// Function to get game
function GameItem(item) {
  const [state, dispatch] = useStoreContext();
  const {
    image,
    gameName,
    _id,
    price,
    quantity
  } = item;
  const { cart } = state
  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        game: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }
  return (
    <div className="card px-1 py-1">
      <Link to={`/games/${_id}`}>
        <img
          alt={gameName}
          src={`/images/${image}`}
        />
        <p>{gameName}</p>
      </Link>
      <div>
        <div>{quantity} {pluralize("item", quantity)} in stock</div>
        <span>${price}</span>
      </div>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}
export default GameItem;