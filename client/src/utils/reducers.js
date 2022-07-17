/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : reducers.js           */
/* Team     : Coders of Hyrule      */
/* Date     : 07/12/2022            */
/* Modified : 07/13/2022            */
/* -------------------------------- */
// Import react 
import { useReducer } from "react";
// Import actions to models
import {
  UPDATE_GAMES,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_PLATFORMS,
  UPDATE_CURRENT_PLATFORM,
  CLEAR_CART,
  TOGGLE_CART
} from "./actions";
// Export reducer
export const reducer = (state, action) => {
  switch (action.type) {
    // Update game stock
    case UPDATE_GAMES:
      return {
        ...state,
        games: [...action.games],
      };
    // Insert games in cart
    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.game],
      };
    // Insert many games in cart
    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.games],
      };
    // Reduce game stock
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map(game => {
          if (action._id === game._id) {
            game.purchaseQuantity = action.purchaseQuantity
          }
          return game
        })
      };
    // Remove game from cart
    case REMOVE_FROM_CART:
      let newState = state.cart.filter(game => {
        return game._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
      };
    // Clear cart
    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: []
      };
    // Toggle cart
    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen
      };
    // Update platforms
    case UPDATE_PLATFORMS:
      return {
        ...state,
        platforms: [...action.platforms],
      };
    // Update current platform
    case UPDATE_CURRENT_PLATFORM:
      return {
        ...state,
        currentPlatform: action.currentPlatform
      }
    // Return object by default
    default:
      return state;
  }
};
// Export reducers
export function useGameReducer(initialState) {
  return useReducer(reducer, initialState)
}