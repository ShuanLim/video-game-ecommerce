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
const Order = require('./Cart');
// Export User and Cart models
module.exports = { User, Cart };