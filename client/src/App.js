/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : App.js                */
/* Team     : Coders of Hyrule      */
/* Date     : 07/08/2022            */
/* Modified : 07/13/2022            */
/* -------------------------------- */
// Import react module
import React from 'react';
// Import react dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import apollo client
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
// Import context
import { setContext } from '@apollo/client/link/context';
// Import home page
import Home from './pages/Home';
// Import detail page
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
// Import login page
import Login from './pages/Login';
// Import sign up
import Signup from './pages/Signup';
// Import navigation bar
import Nav from './components/Nav';
// Import store
import { StoreProvider } from './utils/GlobalState';
// Import sale success page
import Success from './pages/Success';
// Import order history
import OrderHistory from './pages/OrderHistory';
//import 'semantic-ui-css/semantic.min.css'
//import './App.css';

// Create link to database
const httpLink = createHttpLink({
  uri: '/graphql',
});
// Create authentication
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
// Middleware between front and back
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
// Main function App
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <StoreProvider>
            <Nav />
            <Routes>      
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/success" element={<Success />} />
              <Route path="/orderHistory" element={<OrderHistory />} />
              <Route path="/games/:id" element={<Detail />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}
// Export App
export default App;