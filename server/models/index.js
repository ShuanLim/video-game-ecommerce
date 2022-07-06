/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : models/index.js       */
/* Team     : Coders of Hyrule      */
/* Date     : 07/05/2022            */
/* Modified : 07/05/2022            */
/* -------------------------------- */
// Declare and import User model
const User = require('./User');
// Declare and import Cart model
const Cart = require('./Cart');
// Declare and import Game model
const Game = require('./Game');
// Declare and import Platform model
const Platform = require('./Platform');
// Declare and import Genre model
const Genre = require('./Genre');
// Export User, Cart, Game, Platform and Genre models
module.exports = { User, Cart, Game, Platform, Genre };