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
// Import authorization
import Auth from "../utils/auth";
// Import router dom
import { Link } from "react-router-dom";
// Declares Home function
const Home = () => {
  return (
    <div className="container">
      <PlatformMenu />
      {Auth.loggedIn() ? (
        <Cart />
      ) : (
        <div className="login-games">
        <Link to="/login">
        🔐 Login to buy games!
        </Link>
        </div>
      )}
      <GameList />
    </div>
  );
};
// Export Home page
export default Home;