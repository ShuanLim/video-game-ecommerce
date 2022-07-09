// react-api-call
import React from 'react';
import {  Link, BrowserRouter } from "react-router-dom";
const navbar= () =>{
  return (



 
<div className="ui secondary pointing menu">

  <Link className='link' to="/">Games</Link>
  <Link className='link' to="/dashboard">Login</Link>
  <Link className='link' to="/createAccount">Create Account</Link>
  <Link className='link' to="/sale">Sale</Link>
  <Link className='link' to="/curated">Curated</Link>

</div>

);
}
export default navbar;