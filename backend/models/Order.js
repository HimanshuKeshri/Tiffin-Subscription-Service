const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: Date,
  mealType: String,
  status: { type: String, enum: ['pending', 'delivered'], default: 'pending' }
});

module.exports = mongoose.model('Order', orderSchema);
