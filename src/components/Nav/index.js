// react-api-call
import React from 'react';
import {  Link } from "react";
const navbar= () =>{
  return (


<div>
<li>
  <Link to="/">Games</Link>
</li>
<li>
  <Link to="/login">Login</Link>
</li>
<li>
  <Link to="/createAccount">Create Account</Link>
</li>
<li>
  <Link to="/sale">Sale</Link>
</li>
<li>
  <Link to="/curated">Curated</Link>
</li>
</div>
);
}
export default navbar;