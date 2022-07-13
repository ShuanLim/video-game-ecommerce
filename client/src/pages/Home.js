/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : Home.js                */
/* Team     : Coders of Hyrule      */
/* Date     : 07/09/2022            */
/* Modified : 07/12/2022            */
/* -------------------------------- */
// Import react module
import React from "react";
// Import platfform options component
import PlatformMenu from "../components/PlatformMenu";
// Import game list component
import GameList from "../components/GameList";
// Import Cart to store games
import Cart from "../components/Cart";
// Declares Home function
const Home = () => {
  return (
    <div className="container">
      <PlatformMenu />
      <GameList />
      <Cart />
    </div>
  );
};
// Export Home page
export default Home;