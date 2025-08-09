const MealPlan = require('../models/MealPlan');

exports.setMeal = async (req, res) => {
  try {
    const meal = await MealPlan.create(req.body);
    res.status(201).json(meal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMeals = async (req, res) => {
  try {
    const meals = await MealPlan.find();
    res.json(meals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
