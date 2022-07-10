// Declare and import mongoose's Schema and model to use
const { Schema, model } = require('mongoose');
// Declare and import bcrypt
const bcrypt = require('bcrypt');
// Import schema from Cart.js
const Cart = require('./Cart');
// Create user schema
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    carts: [Cart.schema]
  },
  // Set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);
// Hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});
// Custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};
// Number of products in cart
userSchema.virtual('cartCount').get(function () {
  return this.cart.length;
});
// Define mongose User model
const User = model('User', userSchema);
// Export User model
module.exports = User;