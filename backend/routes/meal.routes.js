const router = require('express').Router();
const { setMeal, getMeals } = require('../controllers/meal.controller');
const auth = require('../middlewares/auth.middleware');

router.post('/', auth, setMeal);
router.get('/', auth, getMeals);

module.exports = router;
