// Declare and import mongoose to use
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