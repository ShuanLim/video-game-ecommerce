/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : Platform.js           */
/* Team     : Coders of Hyrule      */
/* Date     : 07/05/2022            */
/* Modified : 07/05/2022            */
/* -------------------------------- */
// Declare and import mongoose's Schema and model to use
const { Schema, model } = require('mongoose');
// Create game schema
const platformSchema = new Schema({
  platformName: {
    type: String,
    required: true,
    trim: true
  }
});
// Define mongose Platform model
const Platform = model('Platform', platformSchema);
// Export Platform model
module.exports = Platform;