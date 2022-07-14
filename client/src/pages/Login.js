/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : Login.js              */
/* Team     : Coders of Hyrule      */
/* Date     : 07/12/2022            */
/* Modified : 07/12/2022            */
/* -------------------------------- */
// Import react
import React, { useState } from 'react';
// Import apollo client
import { useMutation } from '@apollo/client';
// Import router dom
import { Link } from 'react-router-dom';
// Import login method
import { LOGIN } from '../utils/mutations';
// Import authorization module
import Auth from '../utils/auth';
// F  unction to login
function Login(props) {
  // Get params to log
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);
  // Call event to verify credentials
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };
  //  Event to handle changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // Show login page
  return (
    <div className="container my-1">
      {/* <Link to="/signup">Click here to sign up</Link> */}
      <div class ="ui raised very padded text container segment">
      <h1 class="ui center aligned green inverted header">Login to your account</h1>
      <div class ="row">
      <div class ="ui two column centered grid">
      <form className="ui large form" onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2 ">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
    
        </div>
        <div className="flex-row space-between my-2 ">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button type="submit" className='large fluid ui green basic button'>Login</button>
        </div>
      </form>
      </div>
      </div>
      </div>
    </div>
  );
}
// Export login
export default Login;