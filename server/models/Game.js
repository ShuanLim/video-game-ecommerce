/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : Game.js               */
/* Team     : Coders of Hyrule      */
/* Date     : 07/05/2022            */
/* Modified : 07/05/2022            */
/* -------------------------------- */
// Declare and import mongoose to use
const { Schema, model } = require('mongoose');
// Create game schema
const gameSchema = new Schema({
  gameName: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 19.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  platform: {
    type: Schema.Types.ObjectId,
    ref: 'Platform',
    required: true
  },
  genre: {
    type: Schema.Types.ObjectId,
    ref: 'Genre',
    required: true
  }
});
// Define mongose Game model
const Game = model('Game', gameSchema);
// Export Game model
module.exports = Game;