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
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/video-game-ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
// Export mongoose connection
module.exports = mongoose.connection;