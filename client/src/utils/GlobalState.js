/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : GlobalState.js        */
/* Team     : Coders of Hyrule      */
/* Date     : 07/09/2022            */
/* Modified : 07/12/2022            */
/* -------------------------------- */
import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers'
const StoreContext = createContext();
const { Provider } = StoreContext;
const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    platforms: [],
    currentPlatform: '',
  });
  return <Provider value={[state, dispatch]} {...props} />;
};
const useStoreContext = () => {
  return useContext(StoreContext);
};
export { StoreProvider, useStoreContext };