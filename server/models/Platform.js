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