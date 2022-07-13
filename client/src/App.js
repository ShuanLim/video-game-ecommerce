/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : App.js                */
/* Team     : Coders of Hyrule      */
/* Date     : 07/08/2022            */
/* Modified : 07/12/2022            */
/* -------------------------------- */
// Import react module
import React from 'react';
// Import react dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import apollo client
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
// Import context
import { setContext } from '@apollo/client/link/context';
// import 'semantic-ui-css/semantic.min.css'
//import './App.css';
// Import home page
import Home from './pages/Home';
// Import detail page
import Detail from './pages/Detail';
//import NoMatch from './pages/NoMatch';
//import Login from './pages/Login';
//import Signup from './pages/Signup';

//import Header from './components/Header';
//import Body from './components/Body';
//import Footer from './components/Footer';
//import Sale from './components/Sale';
// Import navigation bar
import Nav from './components/Nav';
// Import store
import { StoreProvider } from './utils/GlobalState';
//import Cart  from "./components/Cart";
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
              <Route path="/games/:id" element={<Detail />} />
              
            </Routes>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}
// Export App
export default App;