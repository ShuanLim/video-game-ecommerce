/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : Home.js                */
/* Team     : Coders of Hyrule      */
/* Date     : 07/09/2022            */
/* Modified : 07/12/2022            */
/* -------------------------------- */
import React from "react";
import GameList from "../components/GameList";
import PlatformMenu from "../components/PlatformMenu";
import Cart from "../components/Cart";
const Home = () => {
  return (
    <div className="container">
      <PlatformMenu />
      <GameList />
      <Cart />
    </div>
  );
};
export default Home;