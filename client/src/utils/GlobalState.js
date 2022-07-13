/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : GlobalState.js        */
/* Team     : Coders of Hyrule      */
/* Date     : 07/09/2022            */
/* Modified : 07/12/2022            */
/* -------------------------------- */
// Import react module
import React, { createContext, useContext } from "react";
// Import game reducer
import { useGameReducer } from './reducers'
// Import store context
const StoreContext = createContext();
const { Provider } = StoreContext;
const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useGameReducer({
    games: [],
    cart: [],
    cartOpen: false,
    platforms: [],
    currentPlatform: '',
  });
  return <Provider value={[state, dispatch]} {...props} />;
};
// Return context
const useStoreContext = () => {
  return useContext(StoreContext);
};
// Export store provider and context
export { StoreProvider, useStoreContext };