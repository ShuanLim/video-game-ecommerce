/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : Genre.js              */
/* Team     : Coders of Hyrule      */
/* Date     : 07/05/2022            */
/* Modified : 07/05/2022            */
/* -------------------------------- */
// Declare and import mongoose to use
const { Schema, model } = require('mongoose');
// Create genre schema
const genreSchema = new Schema({
  genreName: {
    type: String,
    required: true,
    trim: true
  }
});
// Define mongose Genre model
const Genre = model('Genre', genreSchema);
// Export Genre model
module.exports = Genre;