const router = require('express').Router();
const { getOrders } = require('../controllers/order.controller');
const auth = require('../middlewares/auth.middleware');

router.get('/', auth, getOrders);

module.exports = router;
