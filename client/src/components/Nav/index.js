/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : Nav/index.js          */
/* Team     : Coders of Hyrule      */
/* Date     : 07/10/2022            */
/* Modified : 07/12/2022            */
/* -------------------------------- */
// Import react module
import React from 'react';
// Import router dom
import { Link } from "react-router-dom";
// Import authorization
import Auth from "../../utils/auth";
// Function to show navbar
function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          {/*<li className="mx-1">
            <Link to="/orderHistory">
              Games purchased
            </Link>
          </li>*/}
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }
  // Show navbar section
  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="console control"> 🎮 </span>
          Super Awesome Video Game E-Commerce Store
        </Link>
      </h1>
      <nav>
        {showNavigation()}
      </nav>
    </header>
    
  );
}
// Export nav
export default Nav;