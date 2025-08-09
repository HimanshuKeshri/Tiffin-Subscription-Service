const router = require('express').Router();
const { createPlan, getPlans } = require('../controllers/plan.controller');
const auth = require('../middlewares/auth.middleware');

// Admin only route to create plan
router.post('/', auth, createPlan);

// Public route to get available plans
router.get('/', getPlans);

module.exports = router;
