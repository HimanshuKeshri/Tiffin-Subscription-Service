const Subscription = require('../models/Subscription');

exports.createSubscription = async (req, res) => {
  try {
    console.log("create sub");
    const sub = await Subscription.create({ ...req.body, user: req.user.userId });
    res.status(201).json(sub);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSubscriptions = async (req, res) => {
  try {
    console.log("get sub.");
    const subs = await Subscription.find({ user: req.user.userId });
    res.json(subs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
