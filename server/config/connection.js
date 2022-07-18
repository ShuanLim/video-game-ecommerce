/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : connection.js         */
/* Team     : Coders of Hyrule      */
/* Date     : 07/05/2022            */
/* Modified : 07/05/2022            */
/* -------------------------------- */
// Declare and import mongoose to use
const mongoose = require('mongoose');
// Establish connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/video-game-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// Export mongoose connection
module.exports = mongoose.connection;