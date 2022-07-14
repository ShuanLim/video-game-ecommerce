/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : User.js               */
/* Team     : Coders of Hyrule      */
/* Date     : 07/05/2022            */
/* Modified : 07/05/2022            */
/* -------------------------------- */
// Declare and import mongoose's Schema and model to use

const mongoose = require('mongoose');

const { Schema } = mongoose;
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
      minlength: 5
    },
    carts: [Cart.schema]
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
// Define mongose User model
const User = mongoose.model('User', userSchema);
// Export User model
module.exports = User;