// react-api-call
import React from 'react';
import {  Link } from "react";
const navbar= () =>{
  return (


<div>
<li>
  <Link to="/">Login</Link>
</li>
<li>
  <Link to="/cats">Create Account</Link>
</li>
<li>
  <Link to="/sheeps">Games</Link>
</li>
<li>
  <Link to="/goats">Search</Link>
</li>
</div>
);
}
export default navbar;