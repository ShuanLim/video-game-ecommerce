/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : Signup.js             */
/* Team     : Coders of Hyrule      */
/* Date     : 07/12/2022            */
/* Modified : 07/12/2022            */
/* -------------------------------- */
// Import react module
import React, { useState } from 'react';
// Import react dom
import { Link } from 'react-router-dom';
// Import apollo client
import { useMutation } from '@apollo/client';
// Import authorization method
import Auth from '../utils/auth';
// Import method to create user
import { ADD_USER } from '../utils/mutations';
// Function to sign up
function Signup(props) {
  // Get credentials
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);
  // Send information to validate in database
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };
  // Method to handle changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // Show sign up page
  return (
    <div className="container my-1">
      {/*<h2>Signup</h2>*/}
      <div className ="ui very padded text container segment">
        <h1 className="ui center aligned green inverted header">Sign up for your account</h1>
        <div className="row">
          <div className="ui four column centered grid">
            <form className ="ui large form" onSubmit={handleFormSubmit}>
              <div className="flex-row space-between my-2">
                <label htmlFor="firstName">First Name:</label>
                <input
                  className='signup-first'
                  placeholder="First"
                  name="firstName"
                  type="text"
                  id="firstName"
                  onChange={handleChange}
                />
              </div>
              <div className="flex-row space-between my-2">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  placeholder="Last"
                  name="lastName"
                  type="text"
                  id="lastName"
                  onChange={handleChange}
                />
              </div>
              <div className="flex-row space-between my-2">
                <label htmlFor="email">Email:</label>
                <input
                  placeholder="youremail@test.com"
                  name="email"
                  type="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div className="flex-row space-between my-2">
                <label htmlFor="pwd">Password:</label>
                <input
                  placeholder="******"
                  name="password"
                  type="password"
                  id="pwd"
                  onChange={handleChange}
                />
              </div>
              <div className="flex-row flex-end">
                {/*<button type="submit">Create</button>*/}
                <button className="large fluid ui green basic button"type="submit">Sign up</button>
              </div>
              <Link to="/login">Login</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
// Export sign up
export default Signup;