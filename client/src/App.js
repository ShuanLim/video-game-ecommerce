/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : App.js                */
/* Team     : Coders of Hyrule      */
/* Date     : 07/08/2022            */
/* Modified : 07/12/2022            */
/* -------------------------------- */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import 'semantic-ui-css/semantic.min.css'
import './App.css';

import Home from './pages/Home';
//import Detail from './pages/Detail';
//import NoMatch from './pages/NoMatch';
//import Login from './pages/Login';
//import Signup from './pages/Signup';

//import Header from './components/Header';
//import Body from './components/Body';
//import Footer from './components/Footer';
//import Sale from './components/Sale';
import Nav from './components/Nav';
import { StoreProvider } from './utils/GlobalState';
//import Cart  from "./components/Cart";

const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <StoreProvider>
            <Nav />
            <Routes>      
              <Route path="/" element={<Home />} />
              
            </Routes>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}
export default App;