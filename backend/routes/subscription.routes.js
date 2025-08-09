const router = require('express').Router();
const { createSubscription, getSubscriptions } = require('../controllers/subscription.controller');
const auth = require('../middlewares/auth.middleware');

router.post('/subscribe', auth, createSubscription);
router.get('/plans', auth, getSubscriptions);

module.exports = router;
