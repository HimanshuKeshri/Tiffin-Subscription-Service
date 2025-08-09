const mongoose = require('mongoose');

const mealPlanSchema = new mongoose.Schema({
  date: Date,
  items: [String],
  price: Number
});

module.exports = mongoose.model('MealPlan', mealPlanSchema);
