// react-api-call
import React from 'react';
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link className='link' to="/">Games</Link>
      <Link className='link' to="/sale">Sale</Link>
      <Link className='link' to="/curated">Curated</Link>
      <Link className='link' to="/login">Login</Link>
      <Link className='link' to="/signup">Create Account</Link>
    </div>
  );
}
export default navbar;