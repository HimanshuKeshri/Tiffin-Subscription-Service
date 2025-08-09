const cron = require('node-cron');
const Order = require('../models/Order');
const Subscription = require('../models/Subscription');

cron.schedule('0 2 * * *', async () => {
  const today = new Date();
  const subs = await Subscription.find({
    startDate: { $lte: today },
    endDate: { $gte: today },
    pausedDates: { $ne: today }
  });

  for (let sub of subs) {
    const types = sub.planType === 'both' ? ['lunch', 'dinner'] : [sub.planType];
    for (let type of types) {
      await Order.create({ user: sub.user, date: today, mealType: type });
    }
  }

  console.log('Daily orders generated');
});
