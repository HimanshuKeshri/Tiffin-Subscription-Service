const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  name: { type: String, enum: ['lunch', 'dinner', 'both'], unique: true },
  description: String,
  price: Number,
  durationInDays: Number  // how long the plan lasts
});

module.exports = mongoose.model('Plan', planSchema);
