/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : server.js             */
/* Team     : Coders of Hyrule      */
/* Date     : 07/05/2022            */
/* Modified : 07/05/2022            */
/* -------------------------------- */
// Import express module
const express = require('express');
// Import apollo server
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
// Import definition and database resolvers
const { typeDefs, resolvers } = require('./schemas');
// Import middleware
const { authMiddleware } = require('./utils/auth');
// Import connection
const db = require('./config/connection');
// Define port
const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  // Integrate Apollo server with the Express application as middleware
  server.applyMiddleware({ app });
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};
// Start apollo server
startApolloServer(typeDefs, resolvers);