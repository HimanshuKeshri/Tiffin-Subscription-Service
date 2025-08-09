const Order = require('../models/Order');

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.userId });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
