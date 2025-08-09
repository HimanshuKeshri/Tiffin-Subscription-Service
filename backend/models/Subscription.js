const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  planType: { type: String, enum: ['lunch', 'dinner', 'both'] },
  startDate: Date,
  endDate: Date,
  pausedDates: [Date]
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
