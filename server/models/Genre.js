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