/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : Detail.js             */
/* Team     : Coders of Hyrule      */
/* Date     : 07/12/2022            */
/* Modified : 07/12/2022            */
/* -------------------------------- */
// Import react module
import React, { useEffect, useState } from 'react';
// Import router dom
import { Link, useParams } from 'react-router-dom';
// Import apollo client
import { useQuery } from '@apollo/client';
// Import store context
import { useStoreContext } from '../utils/GlobalState';
// Import update, insert and delete methods
import {REMOVE_FROM_CART, UPDATE_CART_QUANTITY, ADD_TO_CART, UPDATE_GAMES} from '../utils/actions';
// Import query games
import { QUERY_GAMES } from '../utils/queries';
// Import indexed database
import { idbPromise } from '../utils/helpers';
// Import Cart
import Cart from '../components/Cart';
// Import loading image
import spinner from '../assets/spinner.gif';
// Import authorization
import Auth from "../utils/auth";
// Function to show game detail
function Detail() {
  // Store query game
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();
  const [currentGame, setCurrentGame] = useState({});
  const { loading, data } = useQuery(QUERY_GAMES);
  const { games, cart } = state;
  useEffect(() => {
    // Already in global store
    if (games.length) {
      setCurrentGame(games.find((game) => game._id === id));
    }
    // Retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_GAMES,
        games: data.games,
      });
      data.games.forEach((game) => {
        idbPromise('games', 'put', game);
      });
    }
    // Get cache from idb
    else if (!loading) {
      idbPromise('games', 'get').then((indexedGames) => {
        dispatch({
          type: UPDATE_GAMES,
          games: indexedGames,
        });
      });
    }
  }, [games, data, loading, dispatch, id]);
  // Method to add a game to cart
  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        game: { ...currentGame, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentGame, purchaseQuantity: 1 });
    }
  };
  // Method to delete a game from cart
  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentGame._id,
    });
    idbPromise('cart', 'delete', { ...currentGame });
  };
  // Display game detail
  return (
    <>
      {currentGame && cart ? (
        <div className="container my-1">
          <Link to="/"> ↩️ All Games</Link>
          <h2>{currentGame.gameName}</h2>
          <p>{currentGame.description}</p>
          {Auth.loggedIn() ? (
            <p>
              <strong>Price:</strong>${currentGame.price}{' '}
              <button onClick={addToCart}>Add to Cart</button>
              <button
                disabled={!cart.find((p) => p._id === currentGame._id)}
                onClick={removeFromCart}
              >
                Remove from Cart
              </button>
            </p>
          ) : (
            <p></p>
          )}
          <img
            src={`/images/${currentGame.image}`}
            alt={currentGame.gameName}
          />
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      {Auth.loggedIn() ? (
        <Cart />
      ) : (
        <p></p>
      )}
    </>
  );
}
// Export Detail page
export default Detail;