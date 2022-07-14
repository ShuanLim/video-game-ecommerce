/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : Cart.js               */
/* Team     : Coders of Hyrule      */
/* Date     : 07/05/2022            */
/* Modified : 07/05/2022            */
/* -------------------------------- */
// Declare and import mongoose's Schema and model to use
const { Schema, model } = require('mongoose');
// Create cart schema
const cartSchema = new Schema({
  purchaseDate: {
        type: Date,
     default: Date.now
    },
  games: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Game'
    }
  ]
});
// Define mongose Cart model
const Cart = model('Cart', cartSchema);
// Export Cart model
module.exports = Cart;