/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : CartItem/index.js     */
/* Team     : Coders of Hyrule      */
/* Date     : 07/13/2022            */
/* Modified : 07/13/2022            */
/* -------------------------------- */
// Import react module
import React from 'react';
// Import store context
import { useStoreContext } from "../../utils/GlobalState";
// Import actions to cart
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
// Import indexed database
import { idbPromise } from "../../utils/helpers";
// Cart iten function
const CartItem = ({ item }) => {
  const [, dispatch] = useStoreContext();
  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });
  };
  // Method when add or delete game to cart
  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
    }
  }
  // Show game
  return (
    <div className="flex-row">
      <div>
        <img
          src={`/images/${item.image}`}
          alt=""
        />
      </div>
      <div>
        <div>{item.gameName}, ${item.price}</div>
        <div>
          <span>Quantity:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}
// Export cart item
export default CartItem;